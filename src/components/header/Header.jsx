import React from 'react';
import './Header.css';
import Action from './Action';
import Socials from './Socials';
import animationData from '../../lotties/dev1.json';
import { Player } from '@lottiefiles/react-lottie-player';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Arun Singh</h1>
        <h5 style={{ color: "#ebf6f5" }} className='text-light'><Typewriter
          options={{
            strings: ['Full Stack Web Developer', 'Software Engineer', "Quick Learner"],
            autoStart: true,
            loop: true,
            delay: 80,
          }}
        /></h5>
        <Action />

        <Socials />

        <div className='animation__container'>
          <Player className='animation__item'
            autoplay
            loop
            src={animationData}
          >
          </Player>
        </div>

        <a className='scroll__down' href="#contact">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;