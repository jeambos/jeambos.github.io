import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import {usePluginData} from '@docusaurus/useGlobalData';

// --- 第一部分：问候语 (Header) + 品牌色订阅按钮 ---
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
          
          {/* Substack 按钮 (品牌橙色) */}
          <Link 
            className="button button--lg"
            to="https://jeambo.substack.com/subscribe"
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              backgroundColor: '#ed3d0cd6', // Substack Orange
              color: '#ffffff',           // 白字
              border: 'none'              // 去掉边框
            }}
          >
             <img 
               src="/img/substack.png" 
               alt="Substack" 
               style={{ width: '20px', height: '20px', marginRight: '8px' }} 
             />
             Substack
          </Link>

          {/* Telegram 按钮 (品牌蓝色) */}
          <Link 
            className="button button--lg"
            to="https://t.me/cnm_cn"
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              backgroundColor: '#0088cc', // Telegram Blue
              color: '#ffffff',           // 白字
              border: 'none'              // 去掉边框
            }}
          >
             <img 
               src="/img/telegram.png" 
               alt="Telegram" 
               style={{ width: '20px', height: '20px', marginRight: '8px' }} 
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
        
        {/* 原有的四宫格书籍 */}
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

        {/* === 新增：翻译计划板块 (横贯整行) === */}
        <div className="row margin-top--md">
          <div className="col col--12">
            <div className="card shadow--md">
              <div className="card__header">
                <Heading as="h3">📅 后续翻译计划 & 进度</Heading>
              </div>
              <div className="card__body">
                <p>为了填补中文世界非单偶制资源的空白，我制定了以下翻译计划。如有特定书籍想看，欢迎在 Telegram 群组中反馈。</p>
                
                {/* 进度列表示例 - 你可以在这里修改具体书籍 */}
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>《The Other Significant Others》 (另一种重要他者)</strong>
                    <br/>
                    <progress value="5" max="100" style={{ width: '100%', maxWidth: '300px' }}></progress> 
                    <span style={{ fontSize: '0.9em', marginLeft: '10px' }}>5%：设想中。已生成 AI 导读 - <a href="blog/2025/12/11/the_other_significant_others_guide">点此阅读</a></span>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <strong>《 Polyamorists Next Door》（邻家的多边关系者）</strong>
                    <br/>
                    <progress value="2" max="100" style={{ width: '100%', maxWidth: '300px' }}></progress>
                    <span style={{ fontSize: '0.9em', marginLeft: '10px' }}>0%：设想中。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- 第三部分：热门标签 + 最新动态 ---
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
    <div className={clsx(styles.sectionBlog, 'padding-vert--lg')}>
      <div className="container">
        <div className="row">
          
          {/* 左侧栏：标签 */}
          <div className="col col--3">
            <div className={styles.tagSidebar}>
              {/* 【修改】将 h3 改为 h2，与右侧对齐字号 */}
              <Heading as="h2" className="margin-bottom--md">
                 🏷️ 博客文章
              </Heading>
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
                 <Link to="/blog/tags" className="button button--sm button--outline button--secondary">
                   查看所有标签
                 </Link>
              </div>
            </div>
          </div>

          {/* 右侧栏：最新动态 */}
          <div className="col col--9">
            <Heading as="h2" className="margin-bottom--md margin-top--sm-mobile">
              📝 最近更新
            </Heading>
            
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
                <div className="text--right margin-top--md">
                  <Link to="/blog" className="button button--link">
                    阅读更多文章 &rarr;
                  </Link>
                </div>
              </div>
            ) : (
              <p>暂无更新。</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// --- 第四部分：个人介绍 (About) - 保持不变 ---
function AboutSection() {
  return (
    <div className={clsx(styles.sectionAbout, 'padding-vert--xl')}>
      <div className="container">
        <div className="row">
          <div className="col col--4 text--center">
            <img 
              src="/img/persona.gif" 
              alt="Avatar" 
              style={{ borderRadius: '50%', width: '250px', height: '250px' }} 
            />
          </div>
          <div className="col col--8">
            <Heading as="h2">关于 Jeambo</Heading>
            <p className="margin-top--md">
              曾积极参与 LGBT 倡导活动，现在转入幕后。
              <br/><br/>
              有感于中文非单偶制资料短缺，因此近年来致力于非单偶制资源的翻译工作，主要是翻译书籍。
              <br/><br/>
              从翻译到排版，从封面设计到电子书制作，全部由我一人完成。因此，更新进度较慢，且错误在所难免，敬请谅解。
              <br/><br/>
              希望通过我的努力，能让更多中文读者了解单偶制之外的无限可能，探索更适合自己的情感关系。
              <br/><br/>
              愿每个人都能勇敢去爱，且爱得自由。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 第五部分：【新增】AI 使用声明 ---
function AIStatementSection() {
  return (
    <div className={clsx('padding-vert--lg')} style={{ backgroundColor: '#f5f6f7' }}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
             <Heading as="h2" className="margin-bottom--sm">关于使用 AI 的说明</Heading>
             <p style={{ fontSize: '1rem', color: '#555' }}>
               为了提高翻译效率，我的译本是先由 AI 机翻生成初稿，再由本人修正和重译而成。
               <br/>
               此部分内容视为人工作品。
               <br/>
               由于人工检查的局限，译文中可能存在不自然之处，请<a href="http://t.me/cnm_cn">提醒我修改</a>！
               <br/><br/>
               为了促进资源的丰富，本站亦有部分内容为全 AI 机翻，
               <br/>
               本人不为其内容质量提供担保。但是老实说，其实还挺好的！
               <br/><br/>
               所有纯 AI 内容均会在页面进行显式声明。
             </p>
          </div>

          <div className="col col--4 text--center">
            <img 
              src="/img/ai_assist.jpg" 
              alt="AI Assistance" 
              style={{ borderRadius: '5%', width: '360px', height: '270px' }} 
            />
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
      description="非单偶制，多边关系，开放关系，关系安那其，关系多样性，多边恋，多角恋，多伴侣关系，Polyamory，Poly，CNM，非单偶制书籍翻译">
      
      {/* 1. 标题 + 订阅按钮 */}
      <HomepageHeader />
      
      <main>
        {/* 2. 图书 + 翻译计划 */}
        <BookSection />
        
        {/* 3. 博客标签 + 列表 (字号已统一) */}
        <BlogAndTagsSection />
        
        {/* 4. 个人简介 */}
        <AboutSection />

        {/* 5. AI 使用声明 */}
        <AIStatementSection />
      </main>
    </Layout>
  );
}