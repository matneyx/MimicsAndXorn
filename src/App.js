import React, { Component } from 'react';
import Navbar from './common/Navbar';
import GolarionActionEconomy from './rules/combat/GolarionActionEconomy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <GolarionActionEconomy />
      </div>
    );
  }
}

export default App;
