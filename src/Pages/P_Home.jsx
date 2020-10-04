import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Components/Header/Header';
import Advantages from '../Components/Advantages';
import Store from '../Components/Store';
import Menu from '../Components/Menu';
import Testimonials from '../Components/Testimonials';
import News from '../Components/News';
import Footer from '../Components/Footer';
import '../css/media.css';

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
            
        )
    }
}
