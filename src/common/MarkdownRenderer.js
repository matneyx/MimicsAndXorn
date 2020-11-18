import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/phb.standalone.css';
import { NavigationContext } from './NavigationProvider';

const MarkdownRenderer = () => {
  const { activePage } = useContext(NavigationContext);

  return (
    <ReactMarkdown
      className="phb"
      children={activePage.data} />
  );
};

export default MarkdownRenderer;
