import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Table/>          
      </div>
    );
  }
}

export default App;
