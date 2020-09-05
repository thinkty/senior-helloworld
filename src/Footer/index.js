import React from 'react'
import { Space } from 'antd';

/**
 * This is a footer component for links to
 * - Github: https://github.com/thinkty/senior-helloworld
 * - Create a guide: /post
 * - Leave a feedback: /feedback
 */
export default function Footer() {
  return (
    <Space>
      <a href="https://github.com/thinkty/senior-helloworld"> Github </a>
      <i className="fa fa-github"></i>
      <br/>
      <br/>
      <br/>
      <br/>
      <a href="/post"> 가이드 작성하기 </a>
      <i className="fa fa-edit"></i>
      <br/>
      <br/>
      <br/>
      <br/>
      <a href="/feedback"> 문의하기 </a>
    </Space>
  );
}
