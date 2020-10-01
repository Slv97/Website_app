import React, { Component } from 'react';
import '../../css/Header.css'

import Background from './Background';
import Navigation from './Navigation';
import Basket from './Basket';
import Search from './Search';

class Header extends Component {
    render() {
        return(
            <header className="header">
            <Navigation />
            <Background />   
            </header>
            // <header className="header">
            //     <div className="header_top">
            //         <div className="container">
            //             <div className="header_top_wrapper">                          
                            
            //                 <div className="header_top_r">
            //                     <Nav /></div>                         
            //                 <div className="header_top_l">
            //                     <Basket />
            //                     <Search />
            //                 </div>
            //                 <Background />   
            //             </div>
            //         </div>
            //     </div>
            //     <div className="header_bot">
            //         <div className="container">
            //             Header_bot
            //         </div>
            //     </div>
            // </header>
        );
    }
}

export default Header;