// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MY GOD WHAT HAVE I DONE',
  tagline: 'This is not my beautiful house 🏠',
  url: 'https://anthonycastaneda.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'anthonycastaneda', // Usually your GitHub org/user name.
  projectName: 'web', // Usually your repo name.
   // ...
  plugins: ['docusaurus-plugin-sass'],
  // ...
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/anthonycastaneda/web/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/anthonycastaneda/web/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '➡️',
        logo: {
          alt: 'My Site Logo',
          src: 'img/512Logo-Circle.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/anthonycastaneda',
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
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Sysadmin SubReddit',
                href: 'https://reddit.com/r/sysadmin',
              },
              {
                label: 'Mechanical Keyboards',
                href: 'https://reddit.com/r/mechanicalkeyboards',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/TacoAnthony',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/anthonycastaneda',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anthony Castaneda. Built with Satan in my Heart. 👹`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    }),
};

module.exports = config;