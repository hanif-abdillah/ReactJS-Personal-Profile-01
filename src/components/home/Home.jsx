import React from "react";
import './Home.css';
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
    return (
        <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="2000"
        >

            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <Social />

                        <div className="home__img"></div>

                        <Data />
                    </div>

                    <ScrollDown />
                </div>
            </section>
        </div>
    );
}

export default Home;