// `@type` JSDoc annotations allow editor autocompletion and tnpm pe checking
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
  title: '中文非单偶制资源站 by Jeambo',
  tagline: '🐝❤️be loving. 🐝🪂be free.',
  clientModules: [require.resolve('./src/modules/footnoteTooltip.js')],
  favicon: 'img/favicon.ico?v=2',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://jeambo.com',
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

  // 2. 粘贴下面的 themes 配置
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],


  // 4. 引入 KaTeX 的样式表（必须加这个，否则公式会显示乱码）
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
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
      
    metadata: [
    {name: 'keywords', content: '非单偶制, 多边恋, 开放式关系, 亲密关系, 道德浪女, 关系安那其, 多角恋, CNM, 多伴侣关系, Jeambo, 多元成家, 关系多样性, '},
    {name: 'description', content: 'Jeambo 搭建的非单偶制资源网站，提供 Jeambo 自译的书籍，分享相关的资源。'},
  ],

    docs: {
      sidebar: {
        hideable: true, // 允许用户隐藏整个侧边栏（进入沉浸式阅读）
        autoCollapseCategories: true, // 【关键】点开一个分类，其他的自动合上
  },
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
        title: 'be loving. be free.', // 导航栏左上角的文字
        logo: {
          alt: 'Jeambos Logo',
          src: 'img/logo.svg',
        },
        // 导航栏配置：首页，博客，书籍1-4
        items: [

       // 【博客】放在第一个
        {
          to: '/blog', 
          label: '博客', 
          position: 'left' // 放在左侧
        },
        // --- 书籍入口 ---
        {
          type: 'docSidebar',  // 使用 docSidebar 类型
          sidebarId: 'ethicalSidebar', // 对应 sidebars.js 里的名字
          position: 'left',
          label: '道德浪女',
        },
        {
          type: 'docSidebar',
          sidebarId: 'beyondSidebar',
          position: 'left',
          label: '超越单偶制',
        },
        {
          type: 'docSidebar',
          sidebarId: 'moreSidebar',
          position: 'left',
          label: '不止于二',
        },
        {
          type: 'docSidebar',
          sidebarId: 'openingSidebar',
          position: 'left',
          label: '走向开放',
        },


      ],

      },
      
      
      footer: {
      style: 'dark', // 建议深色，配合 Tilt 分割线
      links: [
        // --- 第一列：本站信息 (Logo等通常难以在这里直接加图片，用 HTML 模拟或纯文字) ---
        {
          title: '中文非单偶制资源站',
          items: [
            {
              html: `
                <div style="margin-bottom: 10px;">
                  <img src="/img/logo.svg" alt="Logo" width="40" style="vertical-align: middle;"/> 
                  <span style="font-weight:bold; margin-left:8px; color: #fff;"><i>by Jeambo</i></span>
                </div>
                <p style="font-size: 0.8rem; color: #aaa;">愿每个人都能勇敢去爱，且爱得自由。</p>
                <div style="display: flex; gap: 10px;">
                  <a href="https://jeambo.substack.com/" target="_blank" style="background: #FF6719; padding: 4px 8px; border-radius: 4px; color: white;">Substack</a>
                  <a href="https://t.me/cnm_cn" target="_blank" style="background: #0088cc; padding: 4px 8px; border-radius: 4px; color: white;">Telegram</a>
                </div>
              `,
            },
          ],
        },
        // --- 第二列：快速导航 ---
        {
          title: '快速导航',
          items: [
            { label: '📚 博客文章', to: '/blog' },
            { label: '🤔 关于CNM的迷思', to: '/#' }, // 替换为你的实际链接
            { label: '💊 新手急救包', to: '/docs/opening_up' },
            { label: '🧠 非单偶制大百科', to: '/docs/beyond_monogamy' },
          ],
        },
        // --- 第三列：相关资源 ---
        {
          title: '相关资源',
          items: [
            { label: 'Polyamory.com', href: 'https://polyamory.com/' },
            { label: '波栗打開開', href: 'https://www.poly.tw/' },
            { label: 'MoreThanTwo.com', href: 'https://www.morethantwo.com' },
            { label: '✍期待你的推荐', href: 'https://t.me/cnm_cn' },
          ],
        },
        // --- 第四列：原内容 ---
        // (Docusaurus 的 copyright 字段会自动放在最底部，不需要放在列里，
        // 但如果你想作为第四列显示，可以写在这里)
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jeambo. Built with Docusaurus. <br/> Licensed under CC BY-SA 4.0.`,
    },



      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;