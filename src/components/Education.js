import React , { Fragment} from 'react';

const Education = () => {
    return ( 
        <Fragment>
            <section className="education section" id="education">
                <span className="section-subtitle">Qualification</span>
                <h2 className="section-title">My Education</h2>

                <div className="education__container bd-grid">
                    <div className="education__content">
                        <div>
                            <h3 className="education__year">2016 - 2019</h3>
                            <span className="education__university">Instituto Superior Tecnológico "José Ochoa León"</span>
                        </div>

                        <div className="education__time">
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                        <div>
                            <h3 className="education_race">Diploma Systems Analyst</h3>
                            <span className="education__especialty">Technology</span>
                        </div>
                    </div>

                    <div className="education__content">
                        <div>
                            <h3 className="education__year">2019</h3>
                            <span className="education__university">Udemy.com</span>
                        </div>

                        <div className="education__time">
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                        <div>
                            <h3 className="education_race">Diploma CSS animations and effects</h3>
                            <span className="education__especialty">UI / UX</span>
                        </div>
                    </div>

                    
                    <div className="education__content">
                        <div>
                            <h3 className="education__year">2019</h3>
                            <span className="education__university">Udemy.com</span>
                        </div>

                        <div className="education__time">
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                        <div>
                            <h3 className="education_race">Diploma Modern Interfaces with Visual Studio</h3>
                            <span className="education__especialty">UI / UX</span>
                        </div>
                    </div>

                    <div className="education__content">
                        <div>
                            <h3 className="education__year">2020</h3>
                            <span className="education__university">Udemy.com</span>
                        </div>

                        <div className="education__time">
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                        <div>
                            <h3 className="education_race">Diploma Modern JavaScript Master</h3>
                            <span className="education__especialty">Frontend</span>
                        </div>
                    </div>

                    <div className="education__content">
                        <div>
                            <h3 className="education__year">Studying..</h3>
                            <span className="education__university">Udemy.com</span>
                        </div>

                        <div className="education__time">
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                        <div>
                            <h3 className="education_race">Diploma ReactJS</h3>
                            <span className="education__especialty">Frontend</span>
                        </div>
                    </div>

                    <div className="education__content">
                        <div>
                            <h3 className="education__year">Studying..</h3>
                            <span className="education__university">Udemy.com</span>
                        </div>

                        <div className="education__time">
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                        <div>
                            <h3 className="education_race">Diploma NodeJS</h3>
                            <span className="education__especialty">Backend</span>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default Education;