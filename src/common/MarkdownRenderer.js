import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/phb.standalone.css';

const MarkdownRenderer = ({data}) =>
    <ReactMarkdown
      className="phb"
      children={data} />;

export default MarkdownRenderer;
