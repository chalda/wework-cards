import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import logo from './wework-logo.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <span className="App-title">WeWork Code Challange</span>
        </header>
        <Board/>
      </div>
    );
  }
}

export default App;
