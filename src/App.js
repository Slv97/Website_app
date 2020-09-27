import React, { Component } from 'react';
import './css/App.css'
import Header from './Components/Header/Header';
import Advantages from './Components/Advantages';
import Store from './Components/Store';

class App extends Component {
  render() {
    return (
      <div className="website_app">
          <Header />
          <Advantages />
          <Store />
      </div>
    );
  }
}

export default App;
