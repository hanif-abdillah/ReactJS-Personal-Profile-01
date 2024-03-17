import React from 'react';
import './Portfolio.css';
import Works from './Works';

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most Recent Works</span>

            <Works />
        </section>
    )
}

export default Portfolio;