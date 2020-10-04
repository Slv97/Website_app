import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import '../css/Footer.css'
import '../css/Section.css'

class Footer extends Component {
    render() {
        return(
            <section className="section foot">
                <div className="section_r foot_r">                    
                    <div className="foot_r_content"> 
                         <img src="/images/foot.jpg" alt="footer"/>   
                    </div>
                </div>
                <div className="section_l foot">
                    <div className="foot_l_content">
                        <NavLink to='/'>
                        <div className="foot_l_content_logo">
                            <img  src="/images/logo.png" alt="logo"/>
                        </div>
                        </NavLink>
                        <div className="foot_l_content_text">Hello! We are Beans Coffee Production, a company that is passionate about making and selling coffee with a great flavor.                        
                        </div>
                        <div className="footer_bot_mail">
                            <a href="#"><span className="footer_bot_tw"></span></a> 
                            <a href="#"><span className="footer_bot_f"></span></a> 
                            <a href="#"><span className="footer_bot_pi"></span></a> 
                            <a href="#"><span className="footer_bot_g"></span></a>
                            <a href="#"><span className="footer_bot_vk"></span></a>
                            <a href="#"><span className="footer_bot_inst"></span></a>
                        </div>
                        <div className="foot_l_content_map">
                            <div className="box_offer_ico nine"></div>
                            <p>2130 Fulton Street, San Diego, CA 94117-1080 USA</p>
                        </div>
                        <div className="foot_l_content_map">
                            <div className="box_offer_ico ten"></div>
                            <p>10:00am—02:00am</p>
                        </div>
                        <div className="foot_l_content_map">
                            <div className="box_offer_ico eleven"></div>
                            <p>1-800-1234-567</p>
                        </div>
                        <div className="foot_l_content_text">&copy; 2020 Beans. All Rights Reserved. Privacy Policy                       
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;