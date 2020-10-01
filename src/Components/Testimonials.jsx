import React, { Component } from 'react';
import '../css/Testimonials.css'
import '../css/Section.css'

class Testimonials extends Component {
    render() {
        return(
            <section className="section testi">
                <div className="section_r testi_r">                    
                    <div className="testi_r_content"> 
                         <img src="/images/testi.jpg" alt="testimonials"/>   
                    </div>
                </div>
                <div className="section_l">
                    <div className="section_l_head">
                        <h3>Testimonials</h3>                                              
                    </div>                     
                    <div className="testi_l_content">
                        <div className="testi_l_content_photo"> 
                            <img src="/images/testi_p1.jpg" alt="Austin Jensen"/>   
                        </div>                    
                        <div className="testi_l_content_description">
                            <div className="ico_qm">&#8222;</div>
                            <div className="testi_l_content_description_text">I started getting coffee from Beans long before it was possible to buy freshly roasted fair trade coffee closer to home. I've tried others, but none are as good as the ones made by Beans’ team.</div>
                            <div className="testi_l_content_description_aut">Austin Jensen</div>
                        </div>                
                    </div>
                    <div className="testi_l_content">
                        <div className="testi_l_content_photo"> 
                            <img src="/images/testi_p2.jpg" alt="Angela Gonzales"/>   
                        </div>                    
                        <div className="testi_l_content_description">
                            <div className="ico_qm">&#8222;</div>
                            <div className="testi_l_content_description_text">When I moved to LA last year, I tried all organic French roast coffee sold here, finding nothing close to Beans French Roast aroma, taste and smoothness. Luckily I can buy 5 pounds of beans through your website. It’s a real pleasure to have my favorite coffee delivered home.</div>
                            <div className="testi_l_content_description_aut">Angela Gonzales</div>
                        </div>                
                    </div>
                    <div className="testi_l_content">
                        <div className="testi_l_content_photo"> 
                            <img src="/images/testi_p3.jpg" alt="Olivia Myers"/>   
                        </div>                    
                        <div className="testi_l_content_description">
                            <div className="ico_qm">&#8222;</div>
                            <div className="testi_l_content_description_text">I’ve been ordering beans from you for ten years. The quality of the product is consistently high! I’m grateful for the care that is apparently put into the roasts and the excellent customer service. Your beans give way to one of the best cups of coffee I’ve ever tasted.</div>
                            <div className="testi_l_content_description_aut">Olivia Myers</div>
                        </div>                
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;