import React from 'react';
import './ContactUs.css';

const ContactUs = (props) => {
    return (
        <div className="contact-page-container">
            <div className="contact-container">
                <h1>Contact Us <span> | Fill out the google form below</span></h1>
                <iframe src="https://docs.google.com/forms/d/1Rz-ZJvZ43wuTIpCXBaj1Fz8CfGwGV4tETInpSlo7NCA/viewform?chromeless=1&edit_requested=true"></iframe>
            </div>
        </div>
    );
}

export default ContactUs;