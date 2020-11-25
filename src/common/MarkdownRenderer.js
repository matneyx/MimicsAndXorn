import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/phb.standalone.css';
import { NavigationContext } from './NavigationProvider';
import gfm from 'remark-gfm';

const MarkdownRenderer = () => {
  const { activePage } = useContext(NavigationContext);

  return (
    <ReactMarkdown
      className="phb"
      plugins={[gfm]}
      children={activePage.data} />
  );
};

export default MarkdownRenderer;
