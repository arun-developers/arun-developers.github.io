import React, { useRef } from 'react';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hx011zg', 'template_vpmcc3q', form.current, 'BxHL2MMx9sqXhdssX')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Email Send Successfully!");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>aruns3435@gmail.com</h5>
                        <a href="https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=new">Email me!</a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Arun Singh</h5>
                        <a href='https://linkedin.com/in/arun-singh-b773b2133' target='_blank'>Connect on LinkedIn!</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder='Your Message...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;