import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learning Hub',
  tagline: 'SAP & Wirtschaftsinformatik Dokumentation',
  favicon: 'img/favicon.ico',

  url: 'https://florianlellig.github.io/',
  baseUrl: '/',

  organizationName: 'florianlellig',
  projectName: 'florianlellig.github.io',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'de', // Auf Deutsch umgestellt
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: 'default', // Instanz 1: SAP
          path: 'docs',
          routeBasePath: 'docs-sap', // URL wird /docs-sap/
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wiwi', // Instanz 2: Wirtschaftsinformatik
        path: 'docs-wiwi',
        routeBasePath: 'docs-wiwi', // URL wird /docs-wiwi/
        sidebarPath: './sidebarsWiwi.js',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'AI',
        path: 'docs-AI',
        routeBasePath: 'docs-AI',
        sidebarPath: './sidebarsAI.js',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Learning Hub',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro', // ID der ersten Datei in /docs/
            position: 'left',
            label: 'SAP Docs',
          },
          {
            type: 'doc',
            docId: 'intro', // ID der ersten Datei in /docs-wiwi/
            docsPluginId: 'wiwi',
            position: 'left',
            label: 'Wirtschaftsinformatik',
          },
          {
            type: 'doc',
            docId: 'intro',
            docsPluginId: 'AI',
            position: 'left',
            label: 'Artificial Intelligence',
          },
          {
            href: 'https://github.com/florianlellig',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'SAP Frameworks', to: '/docs-sap/intro' },
              { label: 'Studium', to: '/docs-wiwi/intro' },
              { label: 'Artificial Intelligence', to: '/docs-AI/intro' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Florian Lellig - Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'json', 'bash'], // Wichtig für SAP CAP & Studium
      },
    }),
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;