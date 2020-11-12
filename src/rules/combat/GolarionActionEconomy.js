import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import '../../styles/phb.standalone.css';

export default () => {
  const [brewData, setBrewData] = useState();

  useEffect(async ()=>{
    const file = await import(`./GolarionActionEconomy.md`);
    const response = await fetch(file.default);
    const text = await response.text();

    setBrewData(text);
  }, []);

  return (
    <ReactMarkdown
      className="phb"
      children={brewData} />
  );

};
