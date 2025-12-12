import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import {usePluginData} from '@docusaurus/useGlobalData';
import TranslationPlanContent from '../components/TranslationPlan.mdx'; // 确保这里引入了你的计划组件

// --- 第一部分：问候语 (Header) ---
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          中文非单偶制资源站 <i>by Jeambo</i>.
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginTop: '2rem' }}>
          
          {/* Substack 按钮 */}
          <Link 
            className="button button--lg"
            to="https://jeambo.substack.com/subscribe"
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              backgroundColor: '#FF6719', // Substack Orange
              color: '#ffffff',           
              border: 'none'              
            }}
          >
             <img 
               src="/img/substack.png" 
               alt="Substack" 
               style={{ width: '20px', height: '20px', marginRight: '8px', filter: 'brightness(0) invert(1)' }} 
             />
             Substack
          </Link>

          {/* Telegram 按钮 */}
          <Link 
            className="button button--lg"
            to="https://t.me/cnm_cn"
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              backgroundColor: '#0088cc', // Telegram Blue
              color: '#ffffff',           
              border: 'none'              
            }}
          >
             <img 
               src="/img/telegram.png" 
               alt="Telegram" 
               style={{ width: '20px', height: '20px', marginRight: '8px', filter: 'brightness(0) invert(1)' }} 
             />
             Telegram
          </Link>

        </div>

      </div>
    </header>
  );
}

// --- 第二部分：书籍介绍 (Books) + 翻译计划 ---
function BookSection() {
  const books = [
    { 
      title: '《道德浪女》The Ethical Slut', 
      desc: '【全文】闻名于世的多边恋圣经，是自由的宣言书，更是实用的操作指南。此书根据原书第三版独立译出，非台版转换。', 
      img: '/img/book1-cover.jpg',
      link: '/docs/ethical' 
    },
    { 
      title: '《超越单偶制的世界》A World Beyond Monogamy', 
      desc: '【全文】非单偶制的百科全书，回答你想知道的所有问题。作者为前BBC记者，真实反映当代非单偶制状况。', 
      img: '/img/book2-cover.jpg',
      link: '/docs/beyond'
    },
    { 
      title: '《不止于二（第二版）》More Than Two', 
      desc: '【翻译中】【机翻全文】无需多言的经典名著，更换合著者后进行全面修订，紧跟时代前沿。已由 Gemini 机翻全文，人工翻译正在进行中。', 
      img: '/img/book3-cover.jpg',
      link: '/docs/morethantwo/'
    },
    { 
      title: '《走向开放》Opening Up', 
      desc: '【机翻全文】来自世纪初的经典著作，重视实操经验，手把手带领新手实践非单偶制。已由 Gemini 机翻全文。', 
      img: '/img/book4-cover.jpg',
      link: '/docs/opening_up'
    },
  ];

  return (
    <div className={clsx(styles.sectionBooks, 'padding-vert--lg')}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          非单偶制图书
        </Heading>
        
        {/* 四宫格书籍 */}
        <div className="row">
          {books.map((book, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg">
              <div className="card shadow--md h-100">
                <div className="card__image" style={{ textAlign: 'center', padding: '20px' }}>
                 <Link to={book.link}>
                    <img 
                      src={book.img} 
                      alt={book.title} 
                      style={{ maxHeight: '300px', objectFit: 'cover', borderRadius: '8px' }} 
                    />
                 </Link>
                </div>
                <div className="card__body">
                  <Heading as="h3">
                    <Link to={book.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {book.title}
                    </Link>
                  </Heading>
                  <p>{book.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 翻译计划板块 */}
        <div className="row margin-top--md">
          <div className="col col--12">
            <div className="card shadow--md">
              <div className="card__body">
                 {/* 这里假设你之前已经创建了 MDX 组件，如果没有，这里会报错 */}
                 {/* 如果暂时没有 MDX 组件，可以把下面这三行删掉，换回普通的 HTML */}
                 <div className="markdown">
                    <TranslationPlanContent />
                 </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- 第三部分：热门标签 + 最新动态 (卡片化) ---
function BlogAndTagsSection() {
  const {recentPosts} = usePluginData('docusaurus-plugin-recent-blog-posts') || {recentPosts: []};
  
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
<div className={clsx(styles.sectionBlog, 'padding-vert--lg', 'section-peach')}>
        <div className="container">
        <div className="row">
          
          {/* 左侧栏：标签 (放入卡片) */}
          <div className="col col--3 margin-bottom--md">
            <div className="card shadow--md h-100">
              <div className="card__header">
                <Heading as="h2">🏷️ 文章分类</Heading>
              </div>
              <div className="card__body">
                <div className={styles.tagListSide}>
                  {tags.map((tag, idx) => (
                    <Link 
                      key={idx} 
                      to={tag.link} 
                      className={styles.tagItemSide}
                    >
                      #{tag.label}
                    </Link>
                  ))}
                </div>
                <div className="margin-top--md">
                   <Link to="/blog/tags" className="button button--sm button--outline button--secondary button--block">
                     所有标签
                   </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧栏：最新动态 (放入卡片) */}
          <div className="col col--9">
            <div className="card shadow--md h-100">
              <div className="card__header">
                <Heading as="h2">📝 最新博客文章</Heading>
              </div>
              <div className="card__body">
                {(recentPosts.length > 0) ? (
                  <div className={styles.blogList}>
                    {recentPosts.map((post, idx) => (
                      <div key={idx} className={styles.blogItem}>
                        <div className={styles.blogDate}>{post.formattedDate}</div>
                        <Link to={post.link} className={styles.blogTitle}>
                          {post.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>暂无更新。</p>
                )}
              </div>
              <div className="card__footer text--right">
                 <Link to="/blog" className="button button--link">
                    阅读更多文章 &rarr;
                 </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// --- 第四部分：个人介绍 (放入卡片) ---
function AboutSection() {
  return (
    <div className={clsx(styles.sectionAbout, 'padding-vert--lg')}>
      <div className="container">
        {/* 用 Card 包裹整个区域 */}
        <div className="card shadow--md">
          <div className="card__body">
            <div className="row">
              <div className="col col--4 text--center">
                <img 
                  src="/img/persona.gif" 
                  alt="Avatar" 
                  style={{ borderRadius: '50%', width: '200px', height: '200px' }} 
                />
              </div>
              <div className="col col--8">
                <Heading as="h2">关于 Jeambo</Heading>
                <p className="margin-top--md">
                  曾积极参与 LGBT 倡导活动，现在转入幕后。
                  <br/><br/>
                  有感于中文非单偶制资料短缺，因此近年来致力于非单偶制资源的翻译工作，主要是翻译书籍。
                  <br/>
                  从翻译到排版，从封面设计到电子书制作，全部由我一人完成。因此，更新进度较慢，且错误在所难免，敬请谅解。
                  <br/><br/>
                  本站亦有博客栏目，分享非单偶制相关的文章与资源推荐。有些是原创不过目前大部分是转载或译文。
                  <br/><br/>
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

// --- 第五部分：AI 使用声明 (放入卡片，去掉硬编码背景) ---
function AIStatementSection() {
  return (
<div className={clsx(styles.sectionStatement, 'padding-vert--lg', 'section-peach')}>
        <div className="container">
        {/* 用 Card 包裹，自动适配暗黑模式 */}
        <div className="card shadow--md">
          <div className="card__body">
            <div className="row">
              <div className="col col--8">
                 <Heading as="h2" className="margin-bottom--sm">🤖 本站与 AI</Heading>
                 <p style={{ fontSize: '1rem' }}>
                   为了提高翻译效率，本站部分书籍的翻译工作，由生成式人工智能（AIAI）辅助生成初稿，经过人工修改审定后生成终稿。
                   <br/>
                   此部分内容视为人工作品。
                   <br/><br/>
                   同时，为了促进资源的丰富，本站亦有部分内容为全 AI 生成。请关注页面上的声明。
                   <br/><br/>
                   我只把我读过且觉得质量不错的 AI 内容搬上来，但本人不为其准确性和完整性提供最终担保。
                   <br/>
                   
                 </p>
              </div>

              <div className="col col--4 text--center">
                <img 
                  src="/img/ai_assist.jpg" 
                  alt="AI Assistance" 
                  style={{ borderRadius: '8px', width: '100%', maxWidth: '300px', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 主页面组件 ---
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`中文非单偶制资源站 by Jeambo`}
      description="非单偶制资源站">
      
      <HomepageHeader />
      
      <main>
        <BookSection />
        <BlogAndTagsSection />
        <AboutSection />
        <AIStatementSection />
      </main>
    </Layout>
  );
}