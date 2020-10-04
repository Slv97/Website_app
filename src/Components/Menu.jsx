import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import '../css/Menu.css';
import '../css/Section.css';
import '../css/media.css';

class Menu extends Component {
    render() {
        return(
            <section className="section menu">
                <div className="section_r menu_r">                    
                    <div className="menu_r_content"> 
                         <img className="menu_r_content_back" src="/images/menu.jpg" alt="menu"/>  
                         <div className="menu_r_content_logo"><img src="/images/logo.png" alt="logo"/></div>   
                    
                    </div>
                </div>
                <div className="section_l menu">
                    <div className="section_l_head">
                    <NavLink to='/menu'>Menu</NavLink>                                              
                    </div>  
                    <div className="services">
                    <div className="container_menu">
                        <ul className="tab-filter">
                            <li className="active" data-tab="tab-content-1">Coffe</li>
                            <li data-tab="tab-content-2">Food</li>
                            <li data-tab="tab-content-3">Desserts</li>
                        </ul>

                        <ul className="tab-content">
                            <li className="active" id="tab-content-1">
                                <ul>
                                    <li>
                                        <div className="menu_prod_container">
                                            <div className="menu_prod">
                                                <div className="menu_prod_name">Americano</div>
                                                <div className="menu_prod_price">$2.49</div>
                                            </div>                                        
                                            <div className="menu_prod_component">60ml Espresso, 90ml Hot Water</div>
                                        </div>
                                    </li>
                                    <li >  
                                        <div className="menu_prod_container">
                                            <div className="menu_prod">
                                                <div className="menu_prod_name">Cappuccino</div>
                                                <div className="menu_prod_price">$1.39</div>
                                            </div>                                        
                                            <div className="menu_prod_component">60ml Espresso, 60ml Steamed Milk</div>
                                        </div>  
                                    </li>
                                    <li >
                                        <div className="menu_prod_container">
                                                <div className="menu_prod">
                                                <div className="menu_prod_name">Macchiato</div>
                                            <div className="menu_prod_price">$2.49</div>
                                            </div>                                        
                                            <div className="menu_prod_component">60ml Espresso, Dot of Foamed Milk</div>
                                        </div>  
                                    </li>
                                </ul>
                            </li>
                            <li id="tab-content-2">
                                <ul>
                                    <li>
                                        <div className="menu_prod_container">
                                            <div className="menu_prod">
                                                <div className="menu_prod_name">Burger</div>
                                                <div className="menu_prod_price">$4.49</div>
                                            </div>                                        
                                            <div className="menu_prod_component">Worcestershire sauce, onions, mustard, ground beef</div>
                                        </div>
                                    </li>
                                    <li >  
                                        <div className="menu_prod_container">
                                            <div className="menu_prod">
                                                <div className="menu_prod_name">French Fries</div>
                                                <div className="menu_prod_price">$1.39</div>
                                            </div>                                        
                                            <div className="menu_prod_component">1 russet potato, vegetable oil, salt</div>
                                        </div>  
                                    </li>
                                    <li >
                                        <div className="menu_prod_container">
                                            <div className="menu_prod">
                                                <div className="menu_prod_name">Cheaseburger</div>
                                                <div className="menu_prod_price">$2.49</div>
                                            </div>                                        
                                            <div className="menu_prod_component">Swiss cheese, ground beef, blue cheese</div>
                                        </div>  
                                    </li>
                                    <li >
                                        <div className="menu_prod_container">
                                            <div className="menu_prod">
                                                <div className="menu_prod_name">Chicken Burger</div>
                                                <div className="menu_prod_price">$2.89</div>
                                            </div>                                        
                                            <div className="menu_prod_component">1 pound of ground white meat chicken, fresh breadcrumbs, cayenne pepper</div>
                                        </div>  
                                    </li>
                                </ul>
                            </li>
                            <li id="tab-content-3">
                                <ul>
                                    <li >
                                        <div className="menu_prod_container">
                                            <div className="menu_prod">
                                                <div className="menu_prod_name">Tiramisu</div>
                                                <div className="menu_prod_price">$2.49</div>
                                            </div>                                        
                                            <div className="menu_prod_component">Mascarpone, heavy cream, Tia Maria</div>
                                        </div>  
                                    </li>
                                    <li >
                                        <div className="menu_prod_container">
                                            <div className="menu_prod">
                                                <div className="menu_prod_name">Ice Cream</div>
                                                <div className="menu_prod_price">$1.89</div>
                                            </div>                                        
                                            <div className="menu_prod_component">Fudge Brownie, Cherry Sundae etc.</div>
                                        </div>  
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                    </div>
                    
                </div>
            </section>
        );
    }
}

window.addEventListener('load', function() {

    const tabs = document.querySelectorAll('.tab-filter > li');
    const tabsContent = document.querySelectorAll('.tab-content > li');

    const clearActive = function() {
        tabs.forEach(function(tab) {
            tab.classList.remove('active');
        });

        tabsContent.forEach(function(content) {
            content.classList.remove('active');
        });
    };

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            clearActive();

            document.querySelector(`#${this.dataset.tab}`).classList.add('active');
            this.classList.add('active');
        });
    });
});

export default Menu;