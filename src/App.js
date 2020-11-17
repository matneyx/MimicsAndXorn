import React, { Component } from 'react';
import Navbar from './common/Navbar';
import MarkdownRenderer from './common/MarkdownRenderer';
import styled from 'styled-components';
// eslint-disable-next-line import/no-webpack-loader-syntax
import intro from '!!raw-loader!./data/Intro.md';

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
            markdown={intro} />
        </MainBody>
      </div>
    );
  }
}

export default App;
