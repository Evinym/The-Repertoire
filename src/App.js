import React, { Component } from 'react';
import logo from './logo.svg';

import Decrem from './Coponnent/Decrementation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Decrem />
        
      </div>
    );
  }
}

export default App;

/* -- <FUNC/> -- Cet fonction a un petit bug a résoudre ultérueurement */