import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import {usePluginData} from '@docusaurus/useGlobalData';
import TranslationPlanContent from '../components/TranslationPlan.mdx';

// --- 0. 配置数据 & 工具组件 ---

// 金句数据 (建议后续提取到单独的 json 文件中)
const QUOTES = [
 "「非单偶制的哲学是反对私有制的。」",
 "「期望一个人满足自己所有需求，这是不公平的」",
 "「嫉妒是不安全感的警报，而非爱的证明」",
 "「恋爱关系并不天然地比其他关系更优先」",
 "「诚实让我们成为勇士而非恶龙」",
 "「若要自己得到自由，必须先给别人自由」",
 "「抛弃固有的关系剧本，每一次相遇本身就是意义」",
 "「单偶制是一个选项：只有拥有选择权时，你的选择才有意义」",
 "「不应该期望一个人满足自己所有需求」",
 "「你无需另一半来让自己“完整”」",
 "「抛弃原有的关系剧本，才能真正建立属于你们自己的关系」",
 "「最好的承诺不是“直到永远”，而是“现在我正完全地与你同在」",
 "「概念是人为定义的，实际上友谊与爱情之间没有不可逾越的高墙」",
 "「规范的模式只有一个，但真实的人却有千万种模样」",
 "「你有多久没有与伴侣深层沟通了？你们想要的东西还是一样的吗？」",
 "「非单偶制并非强硬的制度，而是单偶制之外的无限可能」",
 "「我们共同商定并真诚遵守的契约，是唯一的规则」",
 "「独占爱，使其稀缺，只是人为抬高爱的价格。爱的价值并不在于此。」",
 "「独处不是孤独，而是与自己建立深层连接的时刻。」",
 "「我是独立的生命，你也是独立的生命，我们的相遇因此而美好。」",
];

// 异形分割线组件 (更新版)
// 增加了 ...props 以便支持 style 和 className 的透传
const ShapeDivider = ({ path, fill, height = "60px", className, style }) => (
  <div 
    className={clsx(styles.shapeDivider, className)}
    style={{ ...style }} // <--- 关键：允许传入 transform: rotate 等样式
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none"
      style={{ height: height, fill: fill }}
    >
      {path}
    </svg>
  </div>
);

// --- 1. Header (带金句轮播 + Arrow分割线) ---
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [quoteIndex, setQuoteIndex] = useState(0);

  // 金句轮播逻辑
useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => {
        // 如果只有一条金句，就不折腾了
        if (QUOTES.length <= 1) return 0;

        let newIndex;
        // 核心逻辑：随机生成一个新索引，如果是重复的，就重来，直到不一样为止
        do {
          newIndex = Math.floor(Math.random() * QUOTES.length);
        } while (newIndex === prevIndex);

        return newIndex;
      });
    }, 5000); // 5秒切换一次

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ paddingBottom: '6rem' }}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          中文非单偶制资源站 <i>by Jeambo</i>
        </Heading>
        
        {/* 金句轮播区域 */}
        <div className={styles.quoteContainer}>
          {QUOTES.map((quote, idx) => (
            <div 
              key={idx} 
              className={clsx(styles.quoteItem, idx === quoteIndex && styles.quoteItemActive)}
            >
              {quote}
            </div>
          ))}
        </div>
      </div>
     
    </header>
  );
}

// --- 2. Shortcut 快速入口 (带 Wave 分割线) ---
function ShortcutSection() {
  const items = [
    {
      title: '📖 道德浪女',
      desc: '一键直达，阅读多边关系圣经《道德浪女》简中译本。',
      link: '/docs/ethical',
      btnText: '开始阅读',
      btnClass: styles.btnGold,
      styleClass: styles.cardDirect // <--- 关联 CSS 里的蓝色类
    },
    {
      title: '🤔 这是哪里？',
      desc: '从别处看到本站？从打破单偶制神话开始，了解全新的世界。',
      link: '/docs/beyond_monogamy/part0/0.4.translator_note', // 建议链接
      btnText: '破除迷思',
      btnClass: styles.btnRose,
      styleClass: styles.cardCurious // <--- 关联 CSS 里的绿色类
    }
    /*{
      title: '🌱 新手急救',
      desc: '已经开始尝试，感到不安或嫉妒？获取自助资料。',
      link: '/docs/opening_up', // 建议链接
      btnText: '实务指南',
      color: 'success'Curious
    }*/
  ];

  return (
// 依然保留 sectionShortcut 类名以防万一
    <div className={clsx('padding-top--lg', 'padding-bottom--xl',styles.bgWhite, styles.sectionShortcut)} style={{ position: 'relative', paddingBottom: '8rem' }}>
      <div className="container">
        {/* 让卡片居中显示 (justifyContent: 'center') */}
        <div className="row" style={{ justifyContent: 'center' }}>
          {items.map((item, idx) => (
            // 这里改为 col--6，让两个卡片各占一半宽度，更大气
            <div key={idx} className="col col--6 margin-bottom--md">
              <div 
                // 核心修改：在这里加上 item.styleClass
                className={clsx('card shadow--md h-100 text--center', 'padding-top--md', item.styleClass)} //人工调整了padding
                style={{ borderWidth: '1px' }} // 确保边框显示
              >
                <div className="card__header">
                  <Heading as="h3">{item.title}</Heading>
                </div>
                <div className="card__body">
                  <p>{item.desc}</p>
                </div>
<div className="card__footer">
  {/* 修改前： className={`button button--block button--${item.color}`}
      修改后： 如下所示
  */}
  <Link 
    to={item.link} 
    className={clsx('button button--block','padding-vert--md', item.btnClass)} 
  >
    {item.btnText}
  </Link>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* 分割线：Wave (连接 Shortcuts 和 Books) */}
      {/* 填充色：#fac466 (Book 板块的背景色) */}
      <ShapeDivider 
        className={styles.fillOrange} // <--- 核心修改：使用变量类
        height="80px"
        // 这是一个标准的波浪，底部闭合
        path={<path d="M0,0 C240,90 480,90 720,50 C960,10 1200,80 1200,80 L1200,120 L0,120 Z"></path>}
      />
    </div>
  );
}

// --- 3. Book Section (纯书籍，带 Inverted Book 分割线) ---
function BookSection() {
  const books = [
    { title: '《道德浪女》', desc: '闻名于世的多边恋圣经，自由宣言书。', img: '/img/book1-cover.jpg', link: '/docs/ethical' },
    { title: '《超越单偶制》', desc: '非单偶制的百科全书，回答所有问题。', img: '/img/book2-cover.jpg', link: '/docs/beyond' },
    { title: '《不止于二》', desc: '无需多言的经典名著，紧跟时代前沿。', img: '/img/book3-cover.jpg', link: '/docs/morethantwo/' },
    { title: '《走向开放》', desc: '重视实操经验，手把手带领新手实践。', img: '/img/book4-cover.jpg', link: '/docs/opening_up' },
  ];

  return (
    <div className={clsx(styles.sectionBooks, 'padding-bottom--xl', 'padding-top--md')} style={{ position: 'relative', paddingBottom: '10rem' }}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">电子书阅读与下载</Heading>
        <div className="row">
          {books.map((book, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg">
              <div className="card shadow--md h-100">
                <div className="card__image" style={{ textAlign: 'center', padding: '20px' }}>
                  <Link to={book.link}>
                    <img src={book.img} alt={book.title} style={{ maxHeight: '250px', borderRadius: '8px' }} />
                  </Link>
                </div>
                <div className="card__body">
                  <Heading as="h3"><Link to={book.link} style={{ color: 'inherit', textDecoration: 'none' }}>{book.title}</Link></Heading>
                  <p>{book.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* 分割线：Book (连接 Books 和 Plan) */}
      <ShapeDivider 
        className={styles.fillWhite}
        height="60px"
        style={{ transform: 'rotate(180deg)' }} // <--- 核心修复：直接旋转180度
        path={<path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"></path>}
      />
    </div>
  );
}

// --- 4. Plan Section (独立板块，普通分割线) ---
function PlanSection() {
  return (
    <div className={clsx('padding-vert--lg', styles.bgWhite)}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="card shadow--md">
              <div className="card__body">
                 <div className="markdown">
                    <TranslationPlanContent />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 普通分割线：CSS border 实现，或者直接由下一个板块的背景色区分 */}
    </div>
  );
}

// --- 5. Blog Section (带 Triangle 分割线) ---
function BlogAndTagsSection() {
  const {recentPosts} = usePluginData('docusaurus-plugin-recent-blog-posts') || {recentPosts: []};
  // ... tags 数据省略，保持原样 ...
  const tags = [
    { label: '新手指南', link: '/blog/tags/新手指南' },
    { label: '开放关系', link: '/blog/tags/开放关系' },
    { label: '多边恋', link: '/blog/tags/多边恋' },
    { label: '嫉妒', link: '/blog/tags/嫉妒' },
    { label: '沟通', link: '/blog/tags/沟通' },
    { label: '独身', link: '/blog/tags/独身' },
    { label: '关系安那其', link: '/blog/tags/关系安那其' },
    { label: '个人故事', link: '/blog/tags/个人故事' },
    { label: '资源推荐', link: '/blog/tags/资源推荐' }, 
    { label: '反思与批评', link: '/blog/tags/反思与批评' },
    { label: '酷儿', link: '/blog/tags/酷儿' },
    { label: '性别', link: '/blog/tags/性别' },
    { label: '心理健康', link: '/blog/tags/心理健康' },
    { label: '单偶制研究', link: '/blog/tags/单偶制' },
    { label: '工作日志', link: '/blog/tags/工作日志' },
  ];

  return (
    <div className={clsx(styles.sectionBlog, 'padding-vert--lg')} style={{ position: 'relative', paddingBottom: '6rem' }}>
      <div className="container">
        <div className="row">
          {/* 左侧 Tags */}
          <div className="col col--3 margin-bottom--md">
             {/* ...保持原样... */}
             <div className="card shadow--md h-100">
               <div className="card__header"><Heading as="h2">🏷️ 文章分类</Heading></div>
               <div className="card__body">
                 <div className={styles.tagListSide}>
                   {tags.map((tag, idx) => (
                     <Link key={idx} to={tag.link} className={styles.tagItemSide}>#{tag.label}</Link>
                   ))}
                 </div>
                 <div className="margin-top--md">
                    <Link to="/blog/tags" className="button button--sm button--outline button--secondary button--block">所有标签</Link>
                 </div>
               </div>
             </div>
          </div>
          {/* 右侧 Blog */}
          <div className="col col--9">
             {/* ...保持原样... */}
             <div className="card shadow--md h-100">
               <div className="card__header">
                 <Heading as="h2" style={{ display: 'flex', alignItems: 'center' }}>
                   📝 最新博客文章
                   <Link to="/blog/rss.xml" title="订阅 RSS" style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '10px', color: '#ee802f' }}>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z"></path></svg>
                   </Link>
                 </Heading>
               </div>
               <div className="card__body">
                 {(recentPosts.length > 0) ? (
                   <div className={styles.blogList}>
                     {recentPosts.map((post, idx) => (
                       <div key={idx} className={styles.blogItem}>
                         <div className={styles.blogDate}>{post.formattedDate}</div>
                         <Link to={post.link} className={styles.blogTitle}>{post.title}</Link>
                       </div>
                     ))}
                   </div>
                 ) : (<p>暂无更新。</p>)}
               </div>
               <div className="card__footer text--right">
                  <Link to="/blog" className="button button--link">阅读更多文章 &rarr;</Link>
               </div>
             </div>
          </div>
        </div>
      </div>

{/* 分割线：Triangle (连接 Blog 和 About) */}
      {/* 颜色：#ffce8f (About 的背景色) */}
      <ShapeDivider 
        className={styles.fillPeach} 
        height="60px"
        path={<path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"></path>}
      />
    </div>
  );
}

// --- 6. About Section (普通分割线) ---
function AboutSection() {
  return (
    <div className={clsx(styles.sectionAbout, 'padding-vert--lg')}>
      <div className="container">
        <div className="card shadow--md">
          <div className="card__body">
            <div className="row">
              <div className="col col--4 text--center">
                <img src="/img/persona.gif" alt="Avatar" style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
              </div>
              <div className="col col--8">
                <Heading as="h2">关于 Jeambo</Heading>
                <p className="margin-top--md">
                  曾积极参与 LGBT 倡导活动，现在转入幕后。<br/><br/>
                  有感于中文非单偶制资料短缺，因此近年来致力于非单偶制资源的翻译工作，主要是翻译书籍。<br/><br/>
                  从翻译到排版，再到封面设计和电子书制作，全部由我一人完成。因此，更新进度较慢，且错误在所难免，敬请谅解。<br/><br/>
                  本站亦有博客栏目，分享非单偶制相关的文章与资源推荐。有些是原创不过目前大部分是转载或译文。<br/><br/>
                  愿每个人都能勇敢去爱，且爱得自由。
               </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 7. AI Statement (带 Tilt 分割线，连接 Footer) ---
function AIStatementSection() {
  return (
    <div className={clsx(styles.sectionStatement, 'padding-vert--lg')} style={{ position: 'relative', paddingBottom: '8rem' }}>
      <div className="container">
        <div className="card shadow--md">
          <div className="card__body">
            <div className="row">
              <div className="col col--8">
                 <Heading as="h2" className="margin-bottom--sm">🤖 本站与 AI</Heading>
                 <p>为了提高翻译效率，本站部分书籍的翻译 <b>初稿</b> 由生成式人工智能（AI）生成，<b>终稿</b> 由本人最终撰写而成，本人为稿件质量负最终责任。<br/><br/>
                 同时，为了促进资源的丰富，本站亦有部分内容为全 AI 生成。请关注页面上的声明。<br/><br/>
                 我只放我 <b>读过</b> 且觉得 <b>质量不错</b> 的 AI 内容，但本人不为其准确性和完整性负责任。</p>
              </div>
              <div className="col col--4 text--center">
                <img src="/img/ai_assist.jpg" alt="AI Assistance" style={{ borderRadius: '8px', width: '100%', maxWidth: '300px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

{/* 分割线：Tilt (连接 AI 和 Footer) */}
      {/* 修复逻辑：
          1. fill 改为 #fee1b6 (AI板块背景色)，让它看起来是板块的延伸。
          2. 样式改为 top: 100% (位于板块正下方)，让它盖在 Footer 上。
      */}
      <ShapeDivider 
        className={styles.fillPeachLight}
        height="30px"
        style={{ 
          top: '99%',     /* 稍微往上提一点点(99%)防止浏览器渲染出一条缝隙 */
          bottom: 'auto', /* 覆盖掉默认的 bottom: 0 */
          zIndex: 10      /* 确保它浮在 Footer 上面 */
        }}
        path={<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>}
      />
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`中文非单偶制资源站 by Jeambo`}
      description="非单偶制资源站">
      <HomepageHeader />
      <main>
        <ShortcutSection />
        <BookSection />
        <PlanSection />
        <BlogAndTagsSection />
        <AboutSection />
        <AIStatementSection />
      </main>
      {/* 注意：Global Footer 是由 Docusaurus 配置文件控制的。
         请参考下文修改 docusaurus.config.js
      */}
    </Layout>
  );
}

