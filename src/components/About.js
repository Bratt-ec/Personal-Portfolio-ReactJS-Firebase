import React, {Fragment} from 'react';
import foto from '../img/about.jpg'

const About = () => {
    return (  
        <Fragment>
            <section className="about section" id="about">
                <span className="section-subtitle">My Intro</span>
                <h2 className="section-title">About Me</h2>

                <div className="about__container bd-grid">
                    <div className="about__data">
                        <p className="about__description">Hi, I'm a software developer, 
                        passionate about creating and developing web interfaces. 
                        Capable of using tools and techniques to collect data, analyze, 
                        design, develop and implement new systems to automate procedures
                        I have few years of experience in this area of work, 
                        with multiple quality projects</p>
                        <img src={foto}alt="about me" className="about__img"></img>
                    </div>

                    <div>
                        <div className="about__information">
                            <h3 className="about__information-title">Information</h3>

                            <div className="about__information-data">
                                <i className="bx bx-user about__information-icon"></i>
                                <span>Bryan Alejandro Castro</span>
                            </div>

                            <div className="about__information-data">
                                <i className="bx bx-phone about__information-icon"></i>
                                <span>+593 963642121</span>
                            </div>

                            <div className="about__information-data">
                                <i className="bx bx-envelope about__information-icon"></i>
                                <span>e.nexus.lab@gmail.com</span>
                            </div>   
                        </div>

                        <div className="about__information">
                            <h3 className="about__information-title">Experience and Support</h3>

                            <div className="about__information-data">
                                <i className="bx bx-medal about__information-icon"></i>
                                
                                <div>
                                    <span className="about__information-subtitle">2 Years Job</span>
                                    <span className="about__information-subtitle-small">Experience</span>
                                </div>
                            </div>

                            <div className="about__information-data">
                                <i className="bx bx-briefcase about__information-icon"></i>
                                
                                <div>
                                    <span className="about__information-subtitle">20+ Projects</span>
                                    <span className="about__information-subtitle-small">Completed</span>
                                </div>
                            </div>

                            <div className="about__information-data">
                                <i className="bx bx-support about__information-icon"></i>
                                
                                <div>
                                    <span className="about__information-subtitle">Support</span>
                                    <span className="about__information-subtitle-small">Online 24/7</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>

        </Fragment>
    );
}
 
export default About;