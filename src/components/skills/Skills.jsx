import React from 'react';
import "./Skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
    return (

        <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
        >
            <section className="skills section" id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">My Technical Level</span>

                <div className="skills__container container grid">
                    <Frontend />

                    <Backend />
                </div>
            </section>
        </div>
    );
}

export default Skills;