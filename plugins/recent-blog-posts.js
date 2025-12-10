const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = async function recentBlogPostsPlugin(context, options) {
  return {
    name: 'docusaurus-plugin-recent-blog-posts',
    
    async contentLoaded({actions}) {
      const {setGlobalData} = actions;
      const blogDir = path.resolve(context.siteDir, 'blog');
      
      if (!fs.existsSync(blogDir)) return;
      
      const files = fs.readdirSync(blogDir).filter(file => 
        file.endsWith('.md') || file.endsWith('.mdx')
      );

      const posts = files.map(file => {
        const filePath = path.join(blogDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const {data} = matter(fileContent);
        
        // --- 核心修改：日期获取逻辑 ---
        let dateObj;

        // 1. 优先尝试读取 Frontmatter 里的 date: 2025-xx-xx
        if (data.date) {
          dateObj = new Date(data.date);
        } 
        // 2. 如果没有，尝试从文件名解析 (例如 2025-12-10-my-post.md)
        else {
          const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})/);
          if (dateMatch) {
            // 解析文件名里的日期字符串
            dateObj = new Date(dateMatch[1]);
          } else {
            // 3. 实在不行，读取文件的“出生时间” (Birthtime)
            // 注意：在某些服务器上 birthtime 不准，会退化为 mtime
            const stats = fs.statSync(filePath);
            dateObj = stats.birthtime;
          }
        }

        // --- 链接获取逻辑 ---
        // 如果没有 slug，则把文件名里的日期前缀去掉，作为链接
        let link = data.slug ? `/blog/${data.slug}` : `/blog/${file.replace(/\.mdx?$/, '')}`;
        if (!data.slug) {
            // 匹配 YYYY-MM-DD-标题
            const nameMatch = file.match(/^(\d{4}-\d{2}-\d{2}-)?(.+)$/);
            if (nameMatch) {
                // 如果是 2025-01-01-title.md，我们希望链接是 /blog/title
                // 或者是 /blog/2025/01/01/title，取决于你的 Docusaurus 配置
                // 这里为了保险，保留原逻辑，通常 Docusaurus 会自动处理掉日期
                // 我们直接去掉文件名后缀即可
                link = `/blog/${file.replace(/\.mdx?$/, '')}`; 
            }
        }

        return {
          title: data.title || file.replace('.md', ''),
          date: dateObj,
          // 格式化为中文日期
          formattedDate: dateObj.toLocaleDateString('zh-CN', {
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
          }),
          link: link,
        };
      });

      // 按日期降序（最新的在最前）
      posts.sort((a, b) => b.date - a.date);

      // 只取前 5 篇
      setGlobalData({recentPosts: posts.slice(0, 5)});
    },
  };
};