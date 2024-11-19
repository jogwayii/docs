module.exports = {
  platformOverviewSidebar: [
    "platform-overview/platform-overview",
    // {
    //   type: "category",
    //   label: "Overview",
    //   collapsed: false,
    //   items: [
    //     {
    //       type: 'doc',
    //       id: 'platform-overview/overview'
    //     },
    //   ],
    // },
  ],
  howtoSidebar: [
    "how-to/how-to-landing",
    {
      type: "category",
      label: "Master the basics",
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'how-to/ht-front-end-example'
        },
        {
          type: "doc",
          id: "how-to/ht-front-end-simple",
        },
        {
          type: "doc",
          id: "how-to/ht-join-expose",
        },
        {
          type: "doc",
          id: "how-to/ht-shareable-enums",
        },
        {
          type: 'doc',
          id: 'how-to/ht-kotlin'
        },
      ],
    },
    {
      type: 'category',
      label: 'Enhance your application',
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "how-to/ht-auth",
        },
        {
          type: "doc",
          id: "how-to/ht-audit",
        },
        {
          type: 'doc',
          id: 'how-to/ht-ingest-csv'
        },
        {
          type: "doc",
          id: "how-to/ht-rest",
        },
        {
          type: "doc",
          id: "how-to/ht-consume-kafka",
        },
        {
          type: "doc",
          id: "how-to/ht-fdc3",
        }
      ],
    },
    {
      type: "category",
      label: "Test your application",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "how-to/ht-prepare-test",
        },
        {
          type: "doc",
          id: "how-to/ht-web-unit-test",
        },
        {
          type: "doc",
          id: "how-to/ht-web-e2e-test",
        },
      ],
    }
  ],
  developSidebar: [
    "develop/develop-landing",
    {
      type: "category",
      label: "Development environment",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '001_develop/01_development-environment'
        },
      ],
    },
    {
      type: "category",
      label: "Server capabilities",
      collapsed: true,
      link: {
        type: 'generated-index',
        title: 'Server capabilities',
        description: 'Server capabilities description',
        slug: '/develop/server-capabilities',
        keywords: ['server capabilities', 'server', 'capabilities'],
      },
      items: [
        {
          type: 'autogenerated',
          dirName: '001_develop/02_server-capabilities'
        },
      ],
    },
    {
      type: "category",
      label: "Client capabilities (Web UI)",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '001_develop/03_client-capabilities'
        },
      ],
    },
    {
      type: "category",
      label: "Business components",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '001_develop/04_business-components'
        },
      ],
    },
    {
      type: "category",
      label: "Glossary",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '001_develop/05_glossary'
        },
      ],
    }
  ],
  buildDeployOperateSidebar: [
    "build-deploy-operate/bdo-overview",
    {
      type: "category",
      label: "Build",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '003_build-deploy-operate/01_build'
        },
      ],
    },
    {
      type: "category",
      label: "Deploy",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '003_build-deploy-operate/02_deploy'
        },
      ],
    },
    {
      type: "category",
      label: "Operate",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '003_build-deploy-operate/03_operate'
        },
      ],
    },
  ],

  releaseNotesSidebar: [
    "release-notes/latest-releases",
    {
      type: "category",
      label: "Platform",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "8",
          items: [{ type: "autogenerated", dirName: "004_release-notes/001_platform/8" }],
        },
        {
          type: "category",
          label: "7",
          items: [{ type: "autogenerated", dirName: "004_release-notes/001_platform/7" }],
        },
      ],
    },
    {
      type: "category",
      label: "Create",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '004_release-notes/002_create'
        },
      ],
    },
    {
      type: "category",
      label: "Launchpad Workspace",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '004_release-notes/003_launchpad-workspace'
        },
      ],
    },
    {
      type: "category",
      label: "Launcher",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '004_release-notes/004_launcher'
        },
      ],
    },
    {
      type: "category",
      label: "IntelliJ Plugin",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '004_release-notes/005_intellij-plugin'
        },
      ],
    },
    {
      type: "category",
      label: "VS Code Plugin",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '004_release-notes/006_vscode-plugin'
        },
      ],
    },
    {
      type: "category",
      label: "Custom Elements LSP",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '004_release-notes/007_custom-elements-lsp'
        },
      ],
    },
    {
      type: "category",
      label: "Academy",
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: '004_release-notes/008_academy'
        },
      ],
    }

  ],

};