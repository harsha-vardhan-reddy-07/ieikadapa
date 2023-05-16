import React from 'react';
import {MdLocationOn} from 'react-icons/md';
import {IoCall} from 'react-icons/io5';
import {FaTelegramPlane} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contactPage'>
        <div className="contactTitle" id='ContactUs'>
            <h1>Contact Us</h1>
            <hr />
        </div>
        <div className="contactContent">
            <div className="contactDetails">

              <div className="contactDetailsTitle">
                <hr id='contHr1' />
                <h3>Reach Us</h3>
                <hr id="contHr2" />
              </div>

              <div className="mobile">
                  <IoCall className='contactIcons' />
                  <h4>Mobile: </h4>
                  <p>+91 9848022338</p>
              </div>
              <div className="mail">
                  <FaTelegramPlane className='contactIcons' />
                  <h4>Mail: </h4>
                  <p>ieikadapa@gmail.com</p>
              </div>
              <div className="address">
                  <MdLocationOn className='contactIcons' />
                  <p>vishveshwaraiah bhavan, Prakash nagar, kadapa, 516004, AP, India</p>
              </div>
            </div>
            <div className="contactFormContainer">

              <form className="contactForm">

                  <div className="nameEmail">
                  <div className="name">
                    <label htmlFor="name">FULL NAME</label>
                    <input type="text" placeholder='Name' id='name' />
                  </div>
                  <div className="email">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="email" placeholder='Email' id='email' />
                  </div>
                  </div>
                  <div className="subject">
                    <label htmlFor="subject">SUBJECT</label>
                    <input type="text" placeholder='Subject' id='subject' />
                  </div>
                  <div className="message">
                    <label htmlFor="message">MESSAGE</label>
                    <input type="text" placeholder='Message' id='message' />
                  </div>
                  <button>Send Message</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;