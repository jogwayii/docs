---
format: md
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@genesislcap/foundation-utils](./foundation-utils.md) &gt; [assureDesignSystem](./foundation-utils.assuredesignsystem.md)

## assureDesignSystem() function

assureDesignSystem.

**Signature:**

```typescript
export declare function assureDesignSystem(module: DesignSystemModule): DesignSystemModule;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  module | [DesignSystemModule](./foundation-utils.designsystemmodule.md) |  |

**Returns:**

[DesignSystemModule](./foundation-utils.designsystemmodule.md)

## Remarks

Webpack caching strategies can backfill missing modules with placeholders in an attempt to prevent errors. In the case of offline remotes, we rely on the error to fall back to local versions. This utility assures we have a design system.

## Example 1


```ts
async function zeroDesignSystemImport(): Promise<DesignSystemModule> {
  let module: DesignSystemModule;
  let type: ResourceType = ResourceType.remote;
  try {
    module = await import('foundationZero/ZeroDesignSystem');
    return assureDesignSystem(module);
  } catch (e) {
    logger.info(
      `Please note remoteEntry.js load errors are expected if module federated dependencies are offline. Falling back to locally bundled versions.`,
    );
    type = ResourceType.local;
    module = await import('@genesislcap/foundation-zero');
    return assureDesignSystem(module);
  } finally {
    logger.debug(`Using '${type}' version of foundation-zero`);
  }
}
```

## Example 2

You should also instruct webpack to use strict module handling.

```ts
output: {
  strictModuleErrorHandling: true,
  strictModuleExceptionHandling: true,
}
```

