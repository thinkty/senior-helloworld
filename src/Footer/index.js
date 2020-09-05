import React from 'react'
import { Space } from 'antd';
import { Link } from 'react-router-dom';

/**
 * This is a footer component for links to
 * - Github: https://github.com/thinkty/senior-helloworld
 * - Create a guide: /post
 * - Leave a feedback: /feedback
 */
export default function Footer() {
  const width = window.innerWidth;
  const fontSize = width > 1000 ? 15 : 10;
  const links = [
    {
      name: "Github",
      url: "https://github.com/thinkty/senior-helloworld",
      local: false,
    },
    {
      name: "가이드 작성하기",
      url: "/post",
      local: true,
    },
    {
      name: "문의하기",
      url: "/feedback",
      local: true,
    },
  ];

  return (
    <Space size="large">
      {
        links.map(({ name, url, local }) => (
          local
          ?
          <Link to={url} key={name}>
            <p style={{ fontSize }}> {name} </p>
          </Link> 
          :
          <a href={url} key={name}>
            <p style={{ fontSize }}> {name} </p>
          </a>
        ))
      }
    </Space>
  );
}
