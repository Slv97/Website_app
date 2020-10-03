import React, { Component } from 'react'
import Store from '../Components/Store';
import Footer from '../Components/Footer';
import '../css/Pages.css';

export default class P_Shop extends Component {
    render() {
        return (
            <section className="section p_shope">
                <Store />
                <Footer />
            </section>
        )
    }
}
