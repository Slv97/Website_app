import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import Navigation from './Components/Header/Navigation';
import './css/Header.css';
import P_Home from './Pages/P_Home';


 class App extends Component {
   render() {
     return (
       <div className="website_app">  
       
       <Navigation />
       </div>
     );
   }
 }

 export default App;


