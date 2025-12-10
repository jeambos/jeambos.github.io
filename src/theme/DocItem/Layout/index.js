import React from 'react';
import DocItemLayout from '@theme-original/DocItem/Layout';
import GiscusComponent from '@site/src/components/GiscusComponent';

export default function DocItemLayoutWrapper(props) {
  return (
    <>
      <DocItemLayout {...props} />
      {/* 在文档内容结束后，显示评论区 */}
      <GiscusComponent />
    </>
  );
}