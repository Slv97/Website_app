import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return(    
            <nav className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a>
                        <ul>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Press</a>
                                <ul>
                                    <li><a href="#">Free Website</a></li>
                                    <li><a href="#">Paid Website</a></li>
                                </ul>
                            </li>
                        <li><a href="#">Web Security</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
    );
    }
}

export default Nav;