import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='contact-container'>
                <div className="row">
                    <h3>Contact Us</h3>
                    <div className="col-12 col-lg-6">
                        <h3>Address</h3>
                        <p>Main Building:Lalbug Housing.</p>
                        <p>Appoinment Room:1st floor in Main Buildin</p>

                        <p>Appoinment Time: 10:00 am to 9:00 pm</p>
                        <p>Location:Lalbug Shoshanghat.</p>

                    </div>
                    <div className="col-12 col-lg-6">
                        <h3>Contact</h3>
                        <p>cell : 02345346</p>
                        <p> Phone : 017532734</p>
                        <p> Phone : 017534667</p>
                        <p> Phone : 01753245345</p>
                        <p>Email:xyz123@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;