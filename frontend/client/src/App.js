import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/headers/Searchbar';
import Topnav from './components/headers/Topnav';
import Mainframe from './components/workarea/MainFrame';

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Topnav />
        <Mainframe />
      </div>
    );
  }
}

export default App;
