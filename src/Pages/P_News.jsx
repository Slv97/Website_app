import React, { Component } from 'react'
import News from '../Components/News';
import Footer from '../Components/Footer';
import '../css/Pages.css';
export default class P_News extends Component {
    render() {
        return (
            <section className="section p_menu">
            <News />
            <Footer />
        </section>      
        )
    }
}
