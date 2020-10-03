import React, { Component } from 'react';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import '../css/Pages.css';

export default class P_Menu extends Component {
    render() {
        return(
            <section className="section p_menu">
                <Menu />
                <Footer />
            </section>          

        );
    }
}

