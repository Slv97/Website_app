import React, { Component } from 'react';
import '../css/Store.css'
import '../css/Section.css'

class Store extends Component {
    render() {
        return(
            <section className="section store">
                <div className="section_r store_r">                    
                    <div className="store_r_content"> 
                         <img src="/images/store.jpg" alt="store_coffe"/>   
                    </div>
                </div>
                <div className="section_l">
                    <div className="section_l_head">
                        <h3>Our Store</h3>                                              
                    </div>  
                    <div className="box_offer">
                        <p>Our online store offers a great variety of popular coffee drinks as well as our own specialty coffees. They are available for order at very affordable prices.</p>  
                    </div>
                    <div className="box_offer">
                        <div className="section_l_store">
                            <div className="section_l_store_product">
                                <a href="/"> <img src="/images/product_1.png" alt="Lavazza"/> </a>
                            </div>
                            <div className="section_l_store_description">
                                <h4>Lavazza Crema e Gusto</h4>
                                <p>Lavazza Crema e Gusto Espresso is a special blend of Robusta and Arabica beans.</p>
                                <div className="section_l_store_buy">
                                    <div className="store_description_price">$14.00</div>
                                    <button className="store_description_add"> <span className="ico_basket"></span>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box_offer">
                        <div className="section_l_store">
                            <div className="section_l_store_product">
                                <a href="/"> <img src="/images/product_2.png" alt="Maxwell House"/> </a>
                            </div>
                            <div className="section_l_store_description">
                                <h4>Maxwell House Original Roast Ground Coffee</h4>
                                <p>Having a very interesting history, this coffee is easily recognized all over the globe.</p>
                                <div className="section_l_store_buy">
                                    <div className="store_description_price">$14.00</div>
                                    <button className="store_description_add"> <span className="ico_basket"></span>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box_offer">
                        <div className="section_l_store">
                            <div className="section_l_store_product">
                                <a href="/"> <img src="/images/product_3.png" alt="Douwe Egberts"/> </a>
                            </div>
                            <div className="section_l_store_description">
                                <h4>Douwe Egberts Filter Blend Ground Coffee Medium Roast</h4>
                                <p>Douwe Egberts Real Coffee is a blend of the world’s finest quality beans.</p>
                                <div className="section_l_store_buy">
                                    <div className="store_description_price">$14.00</div>
                                    <button className="store_description_add"> <span className="ico_basket"></span>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box_offer">
                        <div className="section_l_store">
                            <div className="section_l_store_product">
                                <a href="/"> <img src="/images/product_4.png" alt="Douwe Egberts"/> </a>
                            </div>
                            <div className="section_l_store_description">
                                <h4>Douwe Egberts Filter Blend Ground Coffee Medium Roast</h4>
                                <p>One of the best hazelnut coffees, and if you are a big coffee drinker, you must try it.</p>
                                <div className="section_l_store_buy">
                                    <div className="store_description_price">$14.00</div>
                                    <button className="store_description_add"> <span className="ico_basket"></span>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box_offer">
                        <div className="section_l_store">
                            <div className="section_l_store_product">
                                <a href="/"> <img src="/images/product_5.png" alt="Guilt-Free Decaf"/> </a>
                            </div>
                            <div className="section_l_store_description">
                                <h4>Guilt-Free Decaf by Findlays Finest Gourmet Coffee</h4>
                                <p>100% Arabic beans roasted to perfection to bring out the natural flavor of coffee.</p>
                                <div className="section_l_store_buy">
                                    <div className="store_description_price">$14.00</div>
                                    <button className="store_description_add"> <span className="ico_basket"></span>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Store;