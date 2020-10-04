import React, { Component } from 'react';
import '../css/Advantages.css';
import '../css/Section.css';
import {NavLink} from "react-router-dom";

class Advantages extends Component {
    render() {
        return(
            <section className="section advantages">
                <div className="section_r advantages_r">
                    <div className="advantages_r_video">
                        <video className="video_coffe" src="/video/video_coffe.mp4" autoPlay muted loop poster="/images/video_coffe.jpg"></video>
                    </div>
                    <div className="advantages_r_content"> 
                            <div className="ico_qm">&#8222;</div>
                            
                            <h4>Let me wake up, have coffee in the morning and wander through the city and I'll be happy.</h4>
                            <p>Charlotte Eriksson</p>
                    </div>
                </div>
                <div className="section_l advantages_l">
                    <div className="section_l_head">
                        <NavLink to='/about'>Our Advantages</NavLink>
                    </div>  
                    <div className="box_offer">
                        <div className="box_offer_border">
                        <div className="box_offer_ico one"></div>
                        </div>                    
                        <h4>Coffe Variety</h4>
                        <p>We sell and serve various types of coffe ranging from cappuccina to flat white</p>
                    </div>
                    <div className="box_offer">
                        <div className="box_offer_border">
                        <div className="box_offer_ico two"></div>
                        </div>                    
                        <h4>Own Roasting</h4>
                        <p>We roast all coffees we get from our suppliers using our exclusive hot roasting technique.</p>
                    </div>
                    <div className="box_offer">
                        <div className="box_offer_border">
                        <div className="box_offer_ico three"></div>
                        </div>                    
                        <h4>Wholesale and Retail</h4>
                        <p>We provide the best coffee to individual customers as well as to shops and supermarkets.</p>
                    </div>
                    <div className="box_offer">
                        <div className="box_offer_border">
                        <div className="box_offer_ico four"></div>
                        </div>                    
                        <h4>Express Delivery</h4>
                        <p>Our coffee delivery service is available to all US residents any time of the year, 24/7.</p>
                    </div>
                    <div className="box_offer">
                        <div className="box_offer_border">
                        <div className="box_offer_ico five"></div>
                        </div>                    
                        <h4>Free Consultations</h4>
                        <p>Have a question about our products or services? Call us to get a free consultation.</p>
                    </div>
                    <div className="box_offer">
                        <div className="box_offer_border">
                        <div className="box_offer_ico six"></div>
                        </div>                    
                        <h4>Qualified Specialists</h4>
                        <p>Beans is a team of seasoned coffee experts that know how to make coffee properly.</p>
                    </div>
                    <div className="box_offer">
                        <div className="box_offer_border">
                        <div className="box_offer_ico seven">12</div>
                        </div>                    
                        <h4>Supplying Сountries</h4>
                        <p>We order coffee beans from 12 countries that specialize in coffee production.</p>
                    </div>
                    <div className="box_offer">
                        <div className="box_offer_border">
                        <div className="box_offer_ico eight"></div>
                        </div>                    
                        <h4>Quality Guarantee</h4>
                        <p>Every coffee drink you buy or order at our shop has 100% quality guarantee</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Advantages;