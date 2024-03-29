import React, { useState } from 'react';
import "./Services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="section services" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer?</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Service <br /> One
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal" }>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Service One</h3>
                            <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tenetur?</p>

                            <ul className="services__modal-service grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Service <br /> Two
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal" }>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Service Two</h3>
                            <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tenetur?</p>

                            <ul className="services__modal-service grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                            Service <br /> Three
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal" }>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Service Three</h3>
                            <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tenetur?</p>

                            <ul className="services__modal-service grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;