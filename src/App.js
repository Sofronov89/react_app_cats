import React, { Component } from 'react';
import './App.scss';
import Card from './components/card/card';


class App extends Component {
  render() {
    return (
        <div className="app">
          <Card/>
          <Card/>
          <Card/>
        </div>
    );
  }
}

export default App;
