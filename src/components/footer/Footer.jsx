import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Hanif Abdillah</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">
                            Projects
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/hanif.ab_" className="footer__social-link" >
                        <i className='bx bxl-instagram'></i>
                    </a>

                    <a href="https://github.com/hanif-abdillah" className="footer__social-link" >
                        <i className='bx bxl-github' ></i>
                    </a>

                    <a href="https://www.linkedin.com/in/hanif-abdillah-7a5aa02b7/" className="footer__social-link" >
                        <i className='bx bxl-linkedin' ></i>
                    </a>
                </div>

                <span className='footer__copy'>
                    &#169; Hanif Abdillah. All Right Reserved.
                </span>
            </div>
        </footer>
    )
};

export default Footer;