import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/nav'
import './App.css';
import User from './components/User';

class App extends Component {
  render() {
    return (
      <div>
         <Nav />
         <Header />
         <User />
      </div>
    );
  }
}

export default App;
