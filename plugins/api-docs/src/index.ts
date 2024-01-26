// @ts-ignore
import fs from "fs-extra";
import path from "path";
import { createUrlTransformerSteam } from "./streamTransformers";
import { PackageConfig } from "./types";
import { Transform } from "stream";

type PluginOptions = {
  manifest: { packages: Array<PackageConfig> };
  processedMap: Record<string, string>;
};

/**
 * Docusaurus / mdx build can't process empty comments in markdown.
 *
 * In MDX 1 there is a behaviour that will lead to links not being rendered as clickable links. See
 * https://github.com/mdx-js/mdx/issues/1571#issuecomment-853384939
 *
 * This causes:
 *  <b>Implements:</b> [Percentage](./foundation-filters.percentage.md)
 *  <b>Extends:</b> [ClientFilter](./foundation-filters.clientfilter.md)&lt;[NodeEnvParams](./foundation-filters.nodeenvparams.md)&gt;
 *  etc.
 *
 * ...to render unlinked, so users actually see text like this instead:
 *
 * Implements: [NodeEnv](/web/filters/docs/api/foundation-filters.nodeenv)
 *
 * Replacing html tags like <b> with their markdown equivalent `**` fixes the issue, as the line starts with markdown.
 */
function cleanseMarkdownContent(input: string) {
  return input.replace(/<!-- -->/g, "").replace(/<b>|<\/b>/g, "**");
}

async function createApiDoc(inputFile: string, outputFile: string) {
  let content = await fs.readFile(inputFile, { encoding: "utf8" });
  if (path.basename(outputFile) === "index.md") {
    content =
      (await fs.readFile(require.resolve('api-docs-sync/api-preamble'), {
        encoding: "utf8",
      })) +
      "\n" +
      content;
  }
  return fs.writeFile(outputFile, cleanseMarkdownContent(content));
}

async function copyImgFile(inputFile: string, outputFile: string) {
  const content = await fs.readFile(inputFile);
  return fs.writeFile(outputFile, content);
}

async function createReadme(
  inputFile: string,
  outputDir: string,
  output: PackageConfig["output"],
  transformer: Transform,
) {
  const tags = output.tags
    ? output.tags.map((tag) => `  - ${tag}`).join("\n")
    : "";
  const keywords = output.keywords ? `[${output.keywords.join(", ")}]` : "";
  const outputFile = path.join(outputDir, output.readme);

  const readStream = fs.createReadStream(inputFile, { encoding: "utf8" });
  const writeStream = fs.createWriteStream(outputFile, { encoding: "utf8" });

  writeStream.write(
    `---
title: '${output.title}'
sidebar_label: '${output.sidebar_label}'
id: ${output.id}
`,
  );

  if (keywords) {
    writeStream.write(`keywords: ${keywords}\n`);
  }
  if (tags) {
    writeStream.write(`tags:\n${tags}\n`);
  }
  writeStream.write(`---\n\n`);

  /**
   * TODO: Remap any api docs links contained in the README.md file to the target outputApiDocsDir
   */
  readStream.pipe(transformer).pipe(writeStream);
}

function copyDirectoryFiles(packageRootDir: string, outputRootDir: string) {
  return async function({
    inputDir,
    outputDir,
    copyFn,
  }: {
    inputDir: string;
    outputDir: string;
    copyFn: (inputFile: string, outputFile: string) => Promise<void>;
  }) {
    const inputFullDir = path.join(packageRootDir, inputDir);
    const outputFullDir = path.join(outputRootDir, outputDir);
    await fs.ensureDir(outputFullDir);

    /**
     * Copy files using copyFn
     */
    const filesInDir = await fs.readdir(inputFullDir);
    for await (const fileName of filesInDir) {
      const inputFile = path.join(inputFullDir, fileName);
      const outputFile = path.join(outputFullDir, fileName);
      await copyFn(inputFile, outputFile);
    }
  };
}

async function copyApiDocs(
  manifest: PluginOptions["manifest"],
  processedMap: PluginOptions["processedMap"],
) {
  const { packages } = manifest;
  const packagesToProcess = packages.filter(
    (pkg) => pkg.enabled && !(pkg.name in processedMap),
  );
  if (!packagesToProcess.length) {
    console.log("[api-docs-plugin] No packages awaiting processing.");
    return;
  }
  for await (const pkg of packagesToProcess) {
    const packageRootDir = path.join(process.cwd(), "node_modules", pkg.name);
    const outputRootDir = path.join(process.cwd(), pkg.output.directory);
    await fs.ensureDir(outputRootDir);

    const copyDirFiles = copyDirectoryFiles(packageRootDir, outputRootDir);

    if (pkg.src.api_docs && pkg.output.api_docs) {
      await copyDirFiles({
        inputDir: pkg.src.api_docs,
        outputDir: pkg.output.api_docs,
        copyFn: createApiDoc,
      });
    }
    if (pkg.src.img_dir && pkg.output.img_dir) {
      await copyDirFiles({
        inputDir: pkg.src.img_dir,
        outputDir: pkg.output.img_dir,
        copyFn: copyImgFile,
      });
    }

    /**
     * Write readme file, use git to merge in acceptable changes to existing file after write occurs
     */
    const readmeStreamTransformer = createUrlTransformerSteam(pkg.output);
    const packageReadmeFile = path.join(packageRootDir, pkg.src.readme);
    await createReadme(
      packageReadmeFile,
      outputRootDir,
      pkg.output,
      readmeStreamTransformer,
    );

    /**
     * Mark as processed
     */
    const packageJson = await fs.readJson(
      path.join(packageRootDir, "package.json"),
    );
    processedMap[pkg.name] = packageJson.version;
  }
}

export default async function(_context: any, options: PluginOptions) {
  let { manifest, processedMap } = options;
  if (!manifest) {
    throw new Error("[api-docs-plugin] Please provide a manifest file.");
  }
  if (!processedMap) {
    throw new Error(
      "[api-docs-plugin] Please provide a processedMap instance.",
    );
  }
  let status = true;
  let error: Error | null;
  try {
    await copyApiDocs(manifest, processedMap);
  } catch (e: unknown) {
    status = false;
    error = e as Error;
  }
  return {
    name: "api-docs-plugin",
    async loadContent() {
      if (!status) {
        throw new Error(
          `[api-docs-plugin] Failed to process api documentation. ${error?.toString()}`,
        );
      }
    },
  };
}
