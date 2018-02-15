import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
          <nav>
              <button class="tablink">Home</button>
              <button class="tablink">Sectors</button>
              <button class="tablink">Companies</button>
              <button class="tablink">News</button>
              <input type="text" placeholder="Search.."/>
          </nav>
    );
  }
}

export default App;
