// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// 1. 引入数学插件
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jeambos',
  tagline: '🐝❤️be loving. 🐝🪂be free.',
  clientModules: [require.resolve('./src/modules/footnoteTooltip.js')],
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://jeambos.github.io',
  baseUrl: '/',
  trailingSlash: false, 

  // GitHub pages deployment config.
  organizationName: 'jeambos', 
  projectName: 'jeambos.github.io', 

  // 【重要】暂时改为 warn，因为书籍1234的链接还不存在，防止报错无法启动
  onBrokenLinks: 'warn', 

  i18n: {
    defaultLocale: 'zh-Hans', // 建议改为中文，方便后续显示
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // 2. 在 Docs 里启用数学插件
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // 如果不需要“编辑此页”按钮，可以把下面这行删掉
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // 3. 在 Blog 里也启用数学插件
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 如果不需要“编辑此页”按钮，可以把下面这行删掉
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    './plugins/recent-blog-posts.js',
    'docusaurus-plugin-image-zoom',   // 【新增】图片缩放插件
  ],

  // 4. 引入 KaTeX 的样式表（必须加这个，否则公式会显示乱码）
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3yUyH/6+ywqj',
      crossOrigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 暂时注释掉 social card
      // image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      

      // 【新增】图片缩放配置
      zoom: {
        selector: '.markdown img',  // 仅对 Markdown 正文里的图片生效
        background: {
          light: 'rgb(255, 255, 255)', // 浅色模式下的背景色（纯白）
          dark: 'rgb(50, 50, 50)'      // 深色模式下的背景色（深灰）
        },
        config: {
          // 这里的选项参考 medium-zoom 的文档
          margin: 24, // 图片放大后离屏幕边缘留多少空隙
          background: '#BADA55', // 这里的背景优先级更高，通常不需要设
          scrollOffset: 0,
          container: null,
          template: null,
        }
      },
      
      navbar: {
        title: 'Jeambos', // 导航栏左上角的文字
        logo: {
          alt: 'Jeambos Logo',
          src: 'img/logo.svg',
        },
        // 【需求1】导航栏配置：首页，博客，书籍1-4
        items: [
          {
            to: '/', 
            label: '首页', 
            position: 'left'
          },
          {
            to: '/blog', 
            label: '博客', 
            position: 'left'
          },
          // 下面的链接目前是空的，点击会404，你需要去 docs 文件夹创建对应文档
          {
            to: '/docs/ethical_slut/intro', 
            label: '道德浪女', 
            position: 'left'
          },
          {
            to: '/docs/beyond_monogamy/intro', 
            label: '超越单偶', 
            position: 'left'
          },
          {
            to: '/docs/more_than_two/intro', 
            label: '不止于二', 
            position: 'left'
          },
          {
            to: '/docs/opening_up/intro', 
            label: '走向开放', 
            position: 'left'
          },
          // GitHub 链接保留在右侧
          {
            href: 'https://github.com/jeambos/jeambos.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // 【需求3】Footer 只保留版权信息，去掉 links 数组内容
        links: [], 
        copyright: `Copyright © ${new Date().getFullYear()} Jeambo. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;