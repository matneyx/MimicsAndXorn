import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/phb.standalone.css';

const MarkdownRenderer = ({markdown}) => {
  return (
    <ReactMarkdown
      className="phb"
      children={markdown} />
  );
};

export default MarkdownRenderer;
