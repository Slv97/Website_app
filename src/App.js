import React, { Component } from 'react';
import './css/App.css'
import Header from './Components/Header/Header';
import Advantages from './Components/Advantages';
import Store from './Components/Store';
import Menu from './Components/Menu';
import Testimonials from './Components/Testimonials';
import News from './Components/News';

class App extends Component {
  render() {
    return (
      <div className="website_app">
          <Header />
          <Advantages />
          <Store />
          <Menu />
          <Testimonials />
          <News />
      </div>
    );
  }
}

export default App;
