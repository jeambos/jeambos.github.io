import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

// 页面路由变化（切换文章）时执行
export function onRouteDidUpdate({ location, previousLocation }) {
  // 多次尝试，确保捕捉到渲染后的内容
  setTimeout(initFootnoteTooltips, 100);
  setTimeout(initFootnoteTooltips, 800);
}

// 首次加载时执行
if (typeof window !== 'undefined') {
  window.onload = () => {
    setTimeout(initFootnoteTooltips, 500);
  };
}

function initFootnoteTooltips() {
  // 【DEBUG】保留日志：开始寻找
  console.log('[FootnoteScript] 正在寻找脚注 (data-footnote-ref)...');

  const references = document.querySelectorAll('a[data-footnote-ref]');

  // 【DEBUG】保留日志：找到了几个
  console.log(`[FootnoteScript] 本次扫描发现了 ${references.length} 个脚注链接`);

  if (references.length === 0) return;

  references.forEach((ref) => {
    const href = ref.getAttribute('href');
    
    // 【核心功能】防重复绑定
    // Tippy 会在 DOM 元素上挂载一个 _tippy 属性
    if (ref._tippy) {
      // 【DEBUG】保留日志：跳过重复
      console.log(`[FootnoteScript] 跳过已绑定的链接: ${href}`);
      return; 
    }

    if (!href) return;
    
    // 处理 ID (去掉 # 并解码)
    const targetId = decodeURIComponent(href.slice(1));
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      // 【DEBUG】保留日志：成功匹配
      console.log(`[FootnoteScript] ✅ 成功绑定: ${targetId}`);

      const content = targetEl.cloneNode(true);
      
      // 清理返回按钮
      const backLinks = content.querySelectorAll('[data-footnote-backref], .footnote-backref');
      backLinks.forEach(link => link.remove());
      
      const allLinks = content.querySelectorAll('a');
      if (allLinks.length > 0) {
        const lastLink = allLinks[allLinks.length - 1];
        if (lastLink.getAttribute('href') === '#' + ref.id) {
            lastLink.remove();
        }
      }

      tippy(ref, {
        content: content.innerHTML,
        allowHTML: true,
        interactive: true,
        theme: 'light',
        maxWidth: 400,
        appendTo: document.body,
        trigger: 'mouseenter focus click',
        animation: 'shift-away',
        offset: [0, 10],
      });
    } else {
       console.warn(`[FootnoteScript] ❌ 找到链接但未找到底部内容: ${targetId}`);
    }
  });
}