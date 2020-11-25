import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/phb.standalone.css';
import gfm from 'remark-gfm';

const MarkdownRenderer = ({data}) =>
    <ReactMarkdown
      className="phb"
      children={data}
      plugins={[gfm]} />
};

export default MarkdownRenderer;
