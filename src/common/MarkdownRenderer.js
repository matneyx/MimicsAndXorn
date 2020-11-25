import React, { useContext, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/phb.standalone.css';
import { NavigationContext } from './NavigationProvider';
import gfm from 'remark-gfm';
import toc from 'remark-toc';
import normalizeHeadings from 'remark-normalize-headings';
import slug from 'remark-slug';

const MarkdownRenderer = ({page}) => {
  const { setActivePage } = useContext(NavigationContext);

  useEffect(() => setActivePage(page), [setActivePage, page]);

  return (
    <ReactMarkdown
      className="phb"
      children={page.data}
      plugins={[
        gfm,
        toc,
        normalizeHeadings,
        slug
      ]} />
  );
};

export default MarkdownRenderer;
