import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link'; // 引入 Link 组件

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--ifm-color-emphasis-200)'}}>
      
      {/* --- 新增：Telegram 导流提示框 --- */}
      <div style={{
        marginBottom: '20px',
        padding: '12px',
        backgroundColor: 'var(--ifm-color-emphasis-100)', //跟随日夜模式的浅色背景
        borderRadius: '8px',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: 'var(--ifm-color-emphasis-700)'
      }}>
        💬 <b>需要评论区吗？</b>
        <br/>
        下方的 Giscus 评论系统，登录 Github 账号即可使用。
        <br/>
        如果您没有 GitHub 账号，或者希望更私密/即时地交流，
        <br className="margin-vert--sm" /> {/* 移动端换行优化 */}
        欢迎加入 
        <Link 
          to="https://t.me/cnm_cn" 
          style={{fontWeight: 'bold', marginLeft: '4px', textDecoration: 'underline'}}
        >
          Telegram 频道与讨论组 ✈️
        </Link>
      </div>
      {/* ---------------------------------- */}

      <Giscus
        repo="jeambos/jeambos.github.io"
        repoId="R_kgDOPd1HXw"
        category="Announcements"
        categoryId="DIC_kwDOPd1HX84CuKsn"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode} // 自动同步日夜模式
        lang="zh-CN"
        loading="lazy"
        crossorigin="anonymous"
      />
    </div>
  );
}

