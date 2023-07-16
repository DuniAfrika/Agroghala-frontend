import React from 'react';
import "./contacts.css";
function Contact(){
    return <div className='contact'>
         <textarea className='contactme' placeholder='Please Reach out to us...'>
            </textarea>
            <div className='icons'>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            </div>
    </div>
}
export default Contact;