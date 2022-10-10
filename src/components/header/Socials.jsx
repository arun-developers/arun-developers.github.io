import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaHackerrank } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/arun-singh-b773b2133/" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/arun-developers" target='_blank'><BsGithub /></a>
      <a href="https://www.hackerrank.com/aruns3435" target='_blank'><FaHackerrank /></a>
    </div>
  );
}

export default Socials;