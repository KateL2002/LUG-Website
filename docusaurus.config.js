// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LUG @ ZJIC',
  tagline: '浙江交通职业技术学院 Linux 用户协会',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // 在这里设置域名
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ZJVTIT', // Usually your GitHub org/user name.
  projectName: 'LUG-Website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/ZJVTIT/LUG-Website/tree/master',
        },
        blog: {
          id: 'lug-blog',
          showReadingTime: false,
          path: 'blog',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ZJVTIT/LUG-Website/tree/master',
          blogSidebarTitle: '最近更新',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'lug-planet',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'planet',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './planet',
        editUrl:
            'https://github.com/ZJVTIT/LUG-Website/tree/master',
        blogSidebarTitle: '最近更新',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'LUG @ ZJIC',
        logo: {
          alt: 'LUG @ ZJIC',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/planet', label: 'Planet', position: 'left'},
          {
            href: 'https://github.com/ZJVTIT/LUG-Website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '导航',
            items: [
              {
                label: '关于我们',
                to: '/docs/about',
              },
              {
                label: '联系我们',
                to: '/docs/about/contact_us',
              },
              {
                label: '加入我们',
                to: '/docs/about/join_us',
              },
            ],
          },
          
          {
            title: '更多',
            items: [
              {
                label: '最新活动',
                to: '/blog',
              },
              {
                label: 'Github 入口',
                href: 'https://github.com/ZJVTIT/LUG-Website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LUG @ ZJIC, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
