import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Background extends Component {
    render() {
        return(

            <Carousel>
                <Carousel.Item>
                    <img className="headB1" src="/images/head_back1.jpg" alt="hb" />
                    <Carousel.Caption>
                        <img src="/images/logo.png" alt="logo"/>
                        <h3>Bring home the coffe</h3>
                        <p>We sell coffe that has amazing taste and flavor!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img className="headB1" src="/images/head_back2.jpg" alt="hb" />
                    <Carousel.Caption>
                        <img src="/images/logo.png" alt="logo"/>
                        <h3>Good coffe is like friendship</h3>
                        <p>Enjoy rich, warm and strong coffe at our coffe shop</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img className="headB1" src="/images/head_back3.jpg" alt="hb" />
                    <Carousel.Caption>
                        <img src="/images/logo.png" alt="logo"/>
                        <h3>Good coffe is like friendship</h3>
                        <p>Enjoy rich, warm and strong coffe at our coffe shop</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>



            // <section className="section background">
            //     <div className="carousel">
            //         <div className="carousel_wrapper" id="carousel1">
            //             <ul>
            //                 <li>
            //                     <div className="headB1"> <img src="/images/head_back1.jpg" alt="hb" /> </div>
            //                     <div className="header_logo"> <a href="/" title="Go to home page"> <img src="/images/logo.png" alt="BEANS" /> </a></div> 
            //                     <h3>Bring home the coffe</h3>
            //                     <p>We sell coffe that has amazing taste and flavor!</p>
            //                     <button className="button_shopNow" id="shopNow"></button>
            //                     <button className="button_viewMenu" id="viewMenu"></button>
            //                 </li>
            //                 {/* <li>
            //                 <div className="header_logo"> <a href="/" title="Go to home page"> <img src="/images/logo.png" alt="BEANS" /> </a></div> 
            //                     <h3>Good coffe is like friendship</h3>
            //                     <p>Enjoy rich, warm and strong coffe at our coffe shop</p>
            //                     <button className="button_shopNow" id="shopNow"></button>
            //                     <button className="button_viewMenu" id="viewMenu"></button>
            //                 </li>
            //                 <li>
            //                 <div className="header_logo"> <a href="/" title="Go to home page"> <img src="/images/logo.png" alt="BEANS" /> </a></div> 
            //                     <h3>Get the most our of our favorite coffe</h3>
            //                     <p>Take your time to enjoy any coffe at our shop or have it delivered right to your door</p>
            //                     <button className="button_shopNow" id="shopNow"></button>
            //                     <button className="button_viewMenu" id="viewMenu"></button>
            //                 </li>                         */}
            //             </ul>
            //             {/* <button className="carousel_nav carousel_nav-next" id="carousel1Next"></button>
            //             <button className="carousel_nav carousel_nav-prev" id="carousel1Prev"></button> */}
            //         </div>
            //     </div>
            // </section>
        );
    }
}

export default Background;