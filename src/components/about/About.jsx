import React from 'react';
import './About.css';
import MyPhoto from '../../assests/Arun_Singh_Image.jpeg';
import { BiMedal, BiUser, BiFolder } from 'react-icons/bi';

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={MyPhoto} alt="A headshot of Arun" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <BiMedal className='about__icon' />
                            <h5>Experience</h5>
                            <small>1000+ Hours of dedicated coding practice & 100 hours of soft skills training</small>
                        </article>
                        <article className='about__card'>
                            <BiUser className='about__icon' />
                            <h5>Education</h5>
                            <small>Masai Coding School Bangalore(India) <br />Full Stack Web Development</small>
                        </article>
                        <article className='about__card'>
                            <BiFolder className='about__icon' />
                            <h5>Hobbies</h5>
                            <small>Traveling, Playing cricket, Social Work </small>
                        </article>
                    </div>
                    <p>
                        An aspiring software developer with knowledge in software development practices such as coding, testing, code reviews, code comments, etc. Strong ability to communicate with clients and ability to
                        express ideas clearly and concisely. I have a strong passion for both front-end
                        and back-end development. I love to learn and I am always looking to learn
                        and experiment with new technologies!
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;