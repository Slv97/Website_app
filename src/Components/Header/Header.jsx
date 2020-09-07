import React, { Component } from 'react';
import '../../css/Header.css'
import Nav from './Nav';
import Basket from './Basket';
import Search from './Search';

class Header extends Component {
    render() {
        return(
            <header className="header">
                <div className="header_top">
                    <div className="container">
                        <div className="header_top_wrapper">
                            <Nav />
                            <div className="header_top_l">
                                <Basket />
                                <Search />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_bot">
                    <div className="container">
                        Header_bot
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;