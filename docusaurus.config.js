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
        style: 'dark',
        // 【需求3】Footer 只保留版权信息，去掉 links 数组内容
        links: [], 
        copyright: `
      Copyright © ${new Date().getFullYear()} <strong>Jeambo</strong>.
      <br/>
      除非另有声明，本站所有原创内容（含人工译文）均采用 
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" style="border-bottom: 1px dashed;">
        CC BY-NC-ND 4.0
      </a> 
      协议许可。(非商业性使用，禁止演绎) 
      <br/>
      Built with Docusaurus.
    `, 
        
        
        //`本站内容，除特殊注明外，均为CC协议。 ${new Date().getFullYear()} Jeambo. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;