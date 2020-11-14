import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/phb.standalone.css';

const MarkdownRenderer = ({markdownLocation}) => {
  const [brewData, setBrewData] = useState();

  useEffect(()=>{
    const fetchData = async () => {
      const file = await import(markdownLocation);
      const response = await fetch(file.default);
      const text = await response.text();

      setBrewData(text);
    };
    fetchData();
  }, [markdownLocation]);

  return (
    <ReactMarkdown
      className="phb"
      children={brewData} />
  );
};

export default MarkdownRenderer;
