import React, { Component } from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import P_About from '../../Pages/P_About';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


class Navigation extends Component {
    render() {
        return(  
            <nav className="nav">
            <Navbar fixed="top" collapseOnSelect expand="md">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>                        
                            <Nav.Link href="/menu">Menu</Nav.Link>
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="/news">News</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>                        
                    </Navbar.Collapse>
                </Container>                
            </Navbar>
            
            <Router>
                <Switch>
                <Route exact path='/about' component={P_About} />
                </Switch>            
            </Router>
            </nav>

            
                
           

            // <nav className="nav">
            //     <ul>
            //         <li><a href="#">Home</a></li>
            //         <li><a href="#">About</a>
            //             <ul>
            //                 <li><a href="#">Team</a></li>
            //                 <li><a href="#">Press</a>
            //                     <ul>
            //                         <li><a href="#">Free Website</a></li>
            //                         <li><a href="#">Paid Website</a></li>
            //                     </ul>
            //                 </li>
            //             <li><a href="#">Web Security</a></li>
            //             </ul>
            //         </li>
            //         <li><a href="#">Menu</a></li>
            //         <li><a href="#">Shop</a></li>
            //         <li><a href="#">News</a></li>
            //         <li><a href="#">Contact</a></li>
            //     </ul>
            // </nav>
    );
    }
}

export default Navigation;