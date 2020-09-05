import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import AttachFilePage from './AttachFilePage';
import EditorPage from './EditorPage';

const attachFileMethod = "파일 첨부하기";
const useEditorMethod = "작성하기"
export const methods = [attachFileMethod, useEditorMethod];

export default function CreatePage(props) {
  const { method } = props;

  if (method === attachFileMethod) {
    return <AttachFilePage />;
  } else if (method === useEditorMethod) {
    return <EditorPage />;
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Content>

      </Layout.Content>
    </Layout>
  );
}

CreatePage.propTypes = {
  method: PropTypes.string.isRequired,
}
