import React from 'react';
import TOCItems from '@theme-original/TOCItems';

export default function TOCItemsWrapper(props) {
  // 1. 获取原始的目录数据
  const { toc } = props;

  // 2. 构造一个“回到顶部”的假目录项
  // 这里的 value 可以改成“导读”、“回到开头”或者你喜欢的任何文字
  const backToTopItem = {
    value: '📖 回到顶部', 
    id: '',       // 空 ID 通常会让浏览器滚动到页面最顶端
    level: 2,     // 伪装成 H2，这样它一定会被显示出来
  };

  // 3. 把这个假项目插到数组的最前面
  // 只有当目录不为空时才插入，防止在没目录的页面显示奇怪的东西
  const newToc = toc.length > 0 ? [backToTopItem, ...toc] : toc;

  // 4. 把修改后的数据传给原始组件
  return (
    <>
      <TOCItems {...props} toc={newToc} />
    </>
  );
}