const path = require('path');

module.exports = {
  title: 'Attrace Referral Network',
  tagline: 'Referral Layer For The Tokenized Economy\n',
  url: 'https://docs.attrace.com', // Live
  // url: 'https://attrace-org-docs.netlify.app', // Url testing
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'attrace', // Usually your GitHub org/user name.
  projectName: 'docs.attrace.com', // Usually your repo name.
  customFields: {
    baseEditUrl: 'https://github.com/attrace/docs/edit/master/',
  },
  themeConfig: {
    sidebarCollapsible: true,
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
      disableSwitch: true
    },
    algolia: false, 
    // algolia: { // Waiting for key...
    //   apiKey: '542f861e899ca5021f36ec96872eddcd',
    //   indexName: 'docs-attrace-com',
    //   contextualSearch: false,
    // },
    navbar: {
      title: 'Attrace Docs',
      hideOnScroll: false,
      logo: {
        alt: 'Attrace logo',
        src: 'img/logo.svg', 
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          to: 'reference/',
          activeBasePath: 'reference',
          label: 'Reference',
          position: 'left',
        },
        {
          to: 'guides/',
          activeBasePath: 'guides',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'roadmap/',
          activeBasePath: 'roadmap',
          label: 'Roadmap',
          position: 'left',
        },
        {
          to: 'updates/',
          activeBasePath: 'updates',
          label: 'Updates',
          position: 'left',
        },

        // {
        //   label: 'API',
        //   position: 'left',
        //   items: [
        //     {
        //       to: 'docs/api/witness-http',
        //       label: 'Witness API',
        //     },
        //     {
        //       to: 'docs/api/index-http',
        //       label: 'Index API',
        //     },
        //   ]
        // },
        // {
        //   to: 'contracts',
        //   label: 'Contracts',
        //   position: 'left',
        // },

        {
          href: 'https://attrace.com',
          label: 'Attrace.com',
          position: 'right',
        },
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // -- KEEP AS EXAMPLE REFS
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   // {
      //   //   title: 'Docs',
      //   //   items: [
      //   //     {
      //   //       label: 'Style Guide',
      //   //       to: 'docs/',
      //   //     },
      //   //     {
      //   //       label: 'Second Doc',
      //   //       to: 'docs/doc2/',
      //   //     },
      //   //   ],
      //   // },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Telegram',
      //         href: 'https://t.me/attrace',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'GitLab',
      //         href: 'https://github.com/attrace/docs',
      //       },
      //       {
      //         label: 'Attrace.com',
      //         href: 'https://attrace.com',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Currently you are reading the Attrace Technical Documentation. Visit Attrace.com for more information of the Attrace Referral Network.<br /><br/>Copyright © ${new Date().getFullYear()} Attrace Referral Network`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/develop/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [

    // guides section
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        editUrl: 'https://github.com/attrace/docs/edit/master/',
        includeCurrentVersion: true,
        lastVersion: 'current',
        sidebarPath: require.resolve('./sidebars.guides.js'),
      },
    ],

    // reference section
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'reference',
        path: 'reference',
        routeBasePath: 'reference',
        editUrl: 'https://github.com/attrace/docs/edit/master/',
        includeCurrentVersion: true,
        lastVersion: 'current',
        sidebarPath: require.resolve('./sidebars.reference.js'),
      },
    ],

    // roadmap section
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'roadmap',
        path: 'roadmap',
        routeBasePath: 'roadmap',
        editUrl: 'https://github.com/attrace/docs/edit/master/',
        includeCurrentVersion: true,
        lastVersion: 'current',
      },
    ],

    // updates section
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'updates',
        path: 'updates',
        routeBasePath: 'updates',
        editUrl: 'https://github.com/attrace/docs/edit/master/',
        includeCurrentVersion: true,
        lastVersion: 'current',
        sidebarPath: require.resolve('./sidebars.updates.js'),
      },
    ],

  ],
  scripts: [
    {
      src:
          'https://stats.attrace.com/latest.js',
      async: true,
    },
  ],
};
