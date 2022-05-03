module.exports = {
  title: "NEAR Documentation",
  tagline: "Documentation for NEAR Protocol",
  url: "https://docs.near.org",
  baseUrl: "/",
  organizationName: "near",
  projectName: "docs",
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "https://use.fontawesome.com/releases/v5.15.4/js/all.js",
    "/js/copy-code-button.js",
    "/js/mixpanel.js",
    "/js/hotjar.js",
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&display=swap",
    "https://cdn.statically.io/gh/nearprotocol/near-global-footer/acdefee/footer.css",
    "/css/copy-code-button.css",
    "/css/landing-page.css",
  ],
  favicon: "img/favicon.ico",
  customFields: {
    disableHeaderTitle: true,
    fonts: {
      myFont: ["Inter", "sans-serif"],
    },
  },
  themes: ["@saucelabs/theme-github-codeblock"],
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
          editUrl: "https://github.com/near/docs/edit/master/website",
          path: "../docs",
          sidebarPath: "./sidebars.json",
          routeBasePath: "/",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        googleAnalytics: {
          trackingID: "UA-100373569-7",
          anonymizeIP: true,
        },
        blog: {},
        theme: {
          customCss: "/src/css/customTheme.css",
        },
      },
    ],
  ],
  plugins: [],
  themeConfig: {
    announcementBar: {
      id: "Docs",
      content:
        '⚠️ This page is in the making ⚠️ The NEAR documentation can be <a href="https://docs.near.org">found here</a>',
      backgroundColor: "#ff6d6d",
      textColor: "#0e0e0e",
      isCloseable: false,
    },
    prism: {
      // "theme": require('prism-react-renderer/themes/vsdark'),
      additionalLanguages: [
        "rust",
        "java",
        "python",
        "ruby",
        "go",
        "toml",
        "typescript",
      ],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    navbar: {
      title: "DOCS",
      logo: {
        src: "img/near_logo.svg",
      },
      items: [
        {
          to: "/concepts/welcome",
          label: "📖 Learn",
          position: "left",
        },
        {
          to: "/develop/welcome",
          label: "💻 Develop",
          position: "left",
        },
        {
          to: "/integrate/welcome",
          label: "⚙️ Integrate",
          position: "left",
        },
        {
          href: "https://nomicon.io",
          label: "Nomicon",
          position: "left",
        },
        {
          href: "https://near-sdk.io",
          label: "SDKs",
          position: "left",
        },
        {
          href: "https://near-nodes.io",
          label: "Nodes",
          position: "left",
        },
        {
          href: "https://near-indexers.io",
          label: "Indexers",
          position: "left",
        },
        {
          href: "https://wiki.near.org",
          label: "Wiki",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    image: "img/near_logo.svg",
    footer: {
      links: [],
      copyright: "Copyright © 2021 NEAR Protocol",
      logo: {
        src: "img/near_logo.svg",
      },
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "0LUM67N2P2",
      // Public API key: it is safe to commit it
      apiKey: "3975a6e99f873047efc41f318b7da1aa",
      indexName: "near",
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: "near\\.org|near-sdk\\.io",
      // Optional: Algolia search parameters
      searchParameters: {},
      //... other Algolia params
      placeholder: "Search the Docs...",
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi", "zh-CN"],
    localeConfigs: {
      "zh-CN": {
        label: "简体中文",
      },
    },
  },
};
