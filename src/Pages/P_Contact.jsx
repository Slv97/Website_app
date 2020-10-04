import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
           
            <section className="section p_contact">
                <div className="section_r store_r">                    
                    <div className="store_r_content"> 
                         <img className="store_r_content_back" src="/images/contacts.jpg" alt="store_coffe"/>   
                    </div>
                </div>
                <div className="section_l">
                    <div className="section_l_head">                    
                        <h3>Contact us </h3>
                    </div>
                    <p className="p_contact_text">You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit our salon personally. We would be happy to answer your questions.</p>


                    <div className="p_contact_form">
                    <form method="POST">
                    <div className="footer_top_form">

                        <div className="footer_top_form_it">
                            <div className="footer_top_form_name">
                                <input required placeholder="YOUR NAME *" type="text" name="name" minlength="2" maxlength="100" />
                            </div>
                            <div className="footer_top_form_email">
                                <input required placeholder="YOUR E-MAIL *" type="email" name="email" />
                            </div>
                            <div className="footer_top_form_subject">
                                <input required placeholder="YOUR PHONE *" type="tel" name="telephone" maxlength="17" pattern="/\+?(375)\s?\-?\s?([1-9]{2})\s?\-?(\d{3})\s?\-?(\d{2})\s?\-?(\d{2})/gi" />
                            </div>
                        </div>
                        <div className="footer_top_form_it">
                            <div className="footer_top_form_inform">
                                <textarea required placeholder="YOUR MESSAGE *" name="information" rows="8"></textarea>
                            </div>
                        </div>

                    </div>
                        <button className="button_fot">Send Message</button>
                    </form>
                    </div>
                </div>  
            </section>
        )
    }
}

// function telephone(sometel){

//     console.log(sometel);
//     let regex;

//     regex = /\+?(375)\s?\-?\s?([1-9]{2})\s?\-?(\d{3})\s?\-?(\d{2})\s?\-?(\d{2})/gi;
//         console.log(regex.test(sometel) + ' - строгая проверка');
// }


// telephone(sometel = prompt ('Введите Ваш номер телефона в формате +375-XX-XXX-XX-XX'));
