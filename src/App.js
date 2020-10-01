import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import Header from './Components/Header/Header';
import Advantages from './Components/Advantages';
import Store from './Components/Store';
import Menu from './Components/Menu';
import Testimonials from './Components/Testimonials';
import News from './Components/News';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="website_app">
          <Header />
          <Advantages />
          <Store />
          <Menu />
          <Testimonials />
          <News />
          <Footer />
          
          <Route path='/advantages' component={Advantages} />
          
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
