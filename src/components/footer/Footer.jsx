import React from 'react';
import './Footer.css';
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Arun Singh</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Arun Singh. All rights reserved.</small>
        <br />
        <small><BsFillTelephoneFill /> +918285445728</small>
      </div>
    </footer>
  );
}

export default Footer;