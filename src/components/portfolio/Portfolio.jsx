import React from 'react';
import './Portfolio.css';
import Works from './Works';

const Portfolio = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="600"
            data-aos-duration="1000"
        >
            <section className="portfolio section" id="portfolio">
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">Most Recent Works</span>

                <Works />
            </section>
        </div>
    )
}

export default Portfolio;