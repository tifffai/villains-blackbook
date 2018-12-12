import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default App;
