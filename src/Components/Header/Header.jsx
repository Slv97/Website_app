import React, { Component } from 'react';
import '../../css/Header.css';

import Background from './Background';
// import Basket from './Basket';
// import Search from './Search';

class Header extends Component {
    render() {
        return(
            <header className="header">
            <Background /> 
                          
            </header>        
        );
    }
}

export default Header;