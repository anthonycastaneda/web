// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

/* This is a way to import code from other files. */
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docs and Blog and Whatnot",
  tagline: "This is not my beautiful house 🏠",
  url: "https://docs.anthonycastaneda.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/favicon.ico",
  organizationName: "anthonycastaneda", // Usually your GitHub org/user name.
  projectName: "web", // Usually your repo name.
  // ...
  plugins: ["docusaurus-plugin-sass"],
  // ...
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "➡️",
        logo: {
          alt: "My Site Logo",
          src: "img/house.png",
        },
        hideOnScroll: true,
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/anthonycastaneda",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      metadata: [{ name: "robots", content: "max-image-preview:large" }],
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: " Intro",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Nerd Stuff",
            items: [
              {
                label: "Sysadmin SubReddit",
                href: "https://reddit.com/r/sysadmin",
              },
              {
                label: "Mechanical Keyboards",
                href: "https://reddit.com/r/mechanicalkeyboards",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/anthonycastaneda",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anthony Castañeda. Built with Docusaurus.`,
      },
      /* This is the code that allows the code blocks to be highlighted. */
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["powershell"],
      },
    }),
};

module.exports = config;
