import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Header from './Header'
import Villains from './Villains'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="villains-list">
          <Villains />
        </div>
      </div>
    );
  }
}

export default App;
