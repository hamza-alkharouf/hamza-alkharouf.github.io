import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {

 


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hamzaalkharouf5@gmail.com</h5>
            <a href="mailto:hamzaalkharouf5@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+972595033698</h5>
            <a href="https://api.whatsapp.com/send?phone=+972595033698" target="_blank">Send a message</a>
          </article>
        </div>

      </div>
    </section>
  )
}     

export default Contact