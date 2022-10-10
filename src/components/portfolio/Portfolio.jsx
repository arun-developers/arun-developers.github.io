import React from 'react';
import './Portfolio.css';
import tripvillas from '../../assests/tripvillas.jpeg';
import himalay from "../../assests/himalay.jpeg"
import netmeds from '../../assests/netmeds.jpeg';

const projects = [
    {
        id: 1,
        name: "Tripvillas.com",
        image: tripvillas,
        title: 'Tripvillas.com Clone',
        sourcecode: "https://github.com/akashkumar-404/kindly-earthquake-283/tree/main/tripvillas/my-app",
        livelink: "https://tripvillas.vercel.app/",
        position: 'Frontend Role',
        date: 'React js,Chakra ui,JSON Server & css',
        description: 'Tripvillas is one of Asia`s largest Holiday Home Rental E-Commerce Website.The company was founded in late 2009 by Roshan D`Silva when looking for ways to generate additional income from Coffee Plantations owned by his family in India. Inspired by Craigslist, Roshan set out to create a simple website where owners of private homes could create a simple profile for their property and then correspond with like minded families who would be interested in staying in their homes as an alternate to hotels.'
    },
    {
        id: 2,
        image: himalay,
        name: "Himalaya.com",
        title: 'Himalaya.com Clone',
        sourcecode: "https://github.com/prashantbharate/Himalaya-Clone",
        livelink: "https://taupe-twilight-0cd93a.netlify.app/",
        position: 'Frontend Role',
        date: 'Html,css & JavaScript',
        description: 'Himalaya is the largest E-Commerce herbal Website.Today, Himalaya is a leading global herbal health and personal care organization with close to 500 products in over 100 countries.As our reach spread in various segments, we underwent a rebranding to bring our entire range of offerings under the single umbrella "Himalaya Since 1930". We consolidated our portfolios in Pharmaceuticals, Personal Care, BabyCare, Himalaya FOR MOMS, Wellness, and Animal Health.'
    },
    {
        id: 3,
        image: netmeds,
        name: "Netmeds.com",
        title: 'Netmeds.com Clone',
        sourcecode: "https://github.com/DeveloperShubhamKapoor/Netmeds-clone",
        livelink: "https://harmonious-paprenjak-c7b477.netlify.app/",
        position: 'Frontend Role',
        date: 'Html,css & JavaScript',
        description: ' India`s most convenient online pharmacy.Netmeds.com is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 7 million happy customers – PAN India. At netmeds.com, we help you look after your own health effortlessly as well as take care of loved ones wherever they may reside in India. You can buy and send medicines from any corner of the country - with just a few clicks of the mouse.'
    },
];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Top </h5>
            <h2>Projects</h2>
            <br />
            <br />

            <div className="container portfolio__container">
                {projects.map((project) => {
                    return (
                        <article key={project.id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <h3>{project.title}</h3>
                            <h5>{project.position}</h5>
                            <h6><span style={{ color: "white", fontWeight: "bold" }}>Tech Stack : </span>{project.date}</h6>
                            <small className='portfolio__desc'>
                                <span style={{ color: "white", fontWeight: "bold" }}>About {project.name} : </span>{project.description}
                            </small>

                            <div className='website_code_link'>
                                <a href={project.sourcecode} target="blank"><div className='source_code'>Code</div></a>
                                <a href={project.livelink} target="blank"><div className='source_code'>Go Live</div></a>
                            </div>

                        </article>
                    )
                })
                }
            </div>
        </section>
    );
}

export default Portfolio;