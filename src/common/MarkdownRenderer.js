import React, {
  useContext,
  useEffect
} from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/phb.standalone.css';
import '../styles/github-fork-ribbon.css';
import {
  NavigationContext
} from './NavigationProvider';
import gfm from 'remark-gfm';
import normalizeHeadings from 'remark-normalize-headings';
import removeComments from 'remark-remove-comments';

const MarkdownRenderer = ({page}) => {
  const { setActivePage } = useContext(NavigationContext);

  useEffect(() => setActivePage(page), [setActivePage, page]);

  return (
    <>
      <ReactMarkdown
        className="phb"
        children={page.data}
        plugins={[
          gfm,
          normalizeHeadings,
          removeComments
        ]} />
      {page.homebreweryLink &&
        <a className="github-fork-ribbon right-bottom fixed"
          target="__blank"
          href={page.homebreweryLink}
          data-ribbon="Get the PDF!"
          title="Get the PDF!">
            Get the PDF!
        </a>
      }
    </>
  );
};

export default MarkdownRenderer;
