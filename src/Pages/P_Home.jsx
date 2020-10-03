import React, { Component } from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


import Header from '../Components/Header/Header';
import Advantages from '../Components/Advantages';
import Store from '../Components/Store';
import Menu from '../Components/Menu';
import Testimonials from '../Components/Testimonials';
import News from '../Components/News';
import Footer from '../Components/Footer';

export default class P_Home extends Component {
    render() {
        return (
            <div className="p_home">
                <Header />
                <Advantages />
                <Store />
                <Menu />
                <Testimonials />
                <News />
                <Footer />
            </div>
            
        //     <BrowserRouter>
        //     <div className="p_home">
        //         <Header />
        //         <Advantages />
        //         
          
        //   <Route path='/advantages' component={Advantages} />
          
      //</div>
      //</BrowserRouter>
            
        )
    }
}
