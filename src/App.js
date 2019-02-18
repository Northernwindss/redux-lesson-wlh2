import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Counter'
import Count from './Count'
import Products from './Products'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
        <Count />
        <Products />
      </div>
    );
  }
}

export default App;
