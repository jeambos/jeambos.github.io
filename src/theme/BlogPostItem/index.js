import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '@site/src/components/GiscusComponent';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

export default function BlogPostItemWrapper(props) {
  const {metadata, isBlogPostPage} = useBlogPost();

  return (
    <>
      <BlogPostItem {...props} />
      {/* 只有在文章详情页才显示评论，列表页不显示 */}
      {isBlogPostPage && <GiscusComponent />}
    </>
  );
}