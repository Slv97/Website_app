import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section className="section p_contact">
                
                    
                <h3>Contact us </h3>
                <p>Proin iaculis purus consequat sem cure.</p>
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
                            <input placeholder="SUBJECT" type="text" name="subject" maxlength="100" />
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
                   
            </section>
        )
    }
}
