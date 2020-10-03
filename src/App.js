import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'

import P_Home from './Pages/P_Home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="website_app">

        <P_Home />


        {/* <Route exact path='/' component={P_Home} /> */}
          {/* <Header />       
          
          <Route path='/advantages' component={Advantages} /> */}
          
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
