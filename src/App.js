import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import InfoBox from './components/InfoBox'

class App extends Component {
  render() {
    return (
      <div className="centerPage">
        <Header/>
        <InfoBox/>
      </div>
    );
  }
}

export default App;
