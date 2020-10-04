import React, { Component } from 'react';
import '../css/Section.css';
import '../css/Pages.css';
import '../css/News.css';


export default class P_About extends Component {
    render() {
        return (
            <div className="p_about">
                <section className="section p_about">
                    <div className="section_r p_about_r">                    
                        <div className="p_about_r_content"> 
                            <img src="/images/foot.jpg" alt="p_about"/>   
                        </div>
                    </div>
                    <div className="section_l">
                        <div className="section_l_head">
                            <h3>A Few Words About Us</h3>                                              
                        </div>                     
                        <div className="p_about_l_content">
                            <div className="news_l_content_text">We are excited to introduce Beans Coffee Production and invite you to enjoy the unique friendly atmosphere in our coffee shop. If you crave great coffee, you’ll love knowing that we provide a real alternative to chains with handcrafted coffee and espresso drinks.</div> 

                            <div className="p_about_text">Beans was established in 2002 as a powerful alternative to local coffee houses and stores allowing to buy, roast, and grind any type of coffee.</div>
                            <div className="news_content_description_aut">Dennis Williams</div>
                            
                            <div className="news_l_content_text">Beans delivers way beyond the traditional coffee shop favorites. We have traditional breakfast choices, and plenty of healthy options (including gluten free, vegetarian, and vegan). Our lunch offerings include a wide variety of salads, sandwiches and flatbreads.</div> 
                        </div> 

                        <div className="section_l_head">
                            <h3>Gallery</h3>                                              
                        </div>
                        <div className="gallery">
                            <ul>
                                <li><a href="/images/head_back1.jpg" data-zoom-image="gallerry1"><div className="foto_style foto_1"></div></a></li>
                                <li><a href="/images/head_back2.jpg" data-zoom-image="gallerry1"><div className="foto_style foto_2"></div></a></li>
                                <li><a href="/images/head_back3.jpg" data-zoom-image="gallerry1"><div className="foto_style foto_3"></div></a></li>
                                <li><a href="/images/foot.jpg" data-zoom-image="gallerry1"><div className="foto_style foto_4"></div></a></li>
                                <li><a href="/images/menu.jpg" data-zoom-image="gallerry1"><div className="foto_style foto_5"></div></a></li>
                                <li><a href="/images/store.jpg" data-zoom-image="gallerry1"><div className="foto_style foto_6"></div></a></li>
                            </ul>
                        </div> 
                                             
                        
                    </div>
                </section>
            </div>
        )
    }
}

 (function() {

    const zoom = function(event) {
        event.stopPropagation();
        event.preventDefault();     

        if (!this.href) return;
        
        let divZoomImage = document.querySelector('#' + this.dataset.zoomImage),
            someListDelete = document.createElement('button');

        

        if (!divZoomImage) { 
            divZoomImage = document.createElement('div');
            divZoomImage.classList.add('zoomImage');
            divZoomImage.id = this.dataset.zoomImage;       
        };

        divZoomImage.innerHTML = '<img src="' + this.href + '" />';

        document.body.appendChild(divZoomImage);

        someListDelete.classList.add('list_tdl_delete');
        someListDelete.innerHTML = '&#215;';
        divZoomImage.appendChild(someListDelete);
        someListDelete.addEventListener('click', delString);
    };

    const delString = function() {
        this.closest('div').remove();
};

    const init = function() {

        let listA = document.querySelectorAll('a[data-zoom-image]');

        listA.forEach(function(a) {
            a.addEventListener('click', zoom);
        });

        document.addEventListener('click', function(event) {
            event.stopPropagation();

           if  (event.target.parentElement.className != 'zoomImage' &&
                event.target.className != 'zoomImage') { 
                let divZoomImage = document.querySelector('.zoomImage');
                if (!divZoomImage) return;
                divZoomImage.remove();
             }
        });
    };

    if (init) window.addEventListener('load', init);

}());
