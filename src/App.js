import React, { Component } from 'react';
import Navbar from './common/Navbar';
import MarkdownRenderer from './common/MarkdownRenderer';
import styled from 'styled-components';
import NavigationProvider from './common/NavigationProvider';

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
        <NavigationProvider>
          <Navbar />
          <MainBody>
            <MarkdownRenderer />
          </MainBody>
        </NavigationProvider>
      </div>
    );
  }
}

export default App;
