import React, { Component } from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import P_Home from '../../Pages/P_Home';
import P_About from '../../Pages/P_About';
import P_Menu from '../../Pages/P_Menu';
import P_Shop from '../../Pages/P_Shop';
import P_News from '../../Pages/P_News';
import P_Contact from '../../Pages/P_Contact';

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
                <Route exact path='/' component={P_Home} />
                <Route exact path='/about' component={P_About} />
                <Route exact path='/menu' component={P_Menu} />
                <Route exact path='/shop' component={P_Shop} />
                <Route exact path='/news' component={P_News} />
                <Route exact path='/contact' component={P_Contact} />
                </Switch>            
            </Router>

            </nav>
            
    );
    }
}

export default Navigation;