import React, { Component } from 'react';
import Navbar from './common/Navbar';
import MarkdownRenderer from './common/MarkdownRenderer';
import styled from 'styled-components';

const MainBody = styled.div`
  background-color: #EEE5CE;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50px;
  overflow: scroll;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainBody>
          <MarkdownRenderer
            markdownLocation={'./data/Intro.md'} />
        </MainBody>
      </div>
    );
  }
}

export default App;
