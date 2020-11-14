import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/phb.standalone.css';

export default (props) => {
  const [brewData, setBrewData] = useState();

  useEffect(async ()=>{
    const file = await import(props.markdownLocation);
    const response = await fetch(file.default);
    const text = await response.text();

    setBrewData(text);
  }, [props.markdownLocation]);

  return (
    <ReactMarkdown
      className="phb"
      children={brewData} />
  );

};
