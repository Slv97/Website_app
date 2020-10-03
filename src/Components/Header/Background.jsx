import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

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

        );
    }
}

export default Background;