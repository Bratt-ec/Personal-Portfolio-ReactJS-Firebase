import React,{Fragment} from 'react';
import project from "../img/projectmind.png";
const Project = () => {
    return ( 
        <Fragment>
            <section className="project section">
                <div className="project__container bd-grid">
                    <div className="project__data">
                        <h2 className="section-title project__title">Do you have project in mind?</h2>
                        <p className="project__description">if you have a project that you want to carry out, do not hesitate and tell me what it is, and what services I can offer you, contact me directly here</p>
                        <a href="#contact" className="button button__light">Contact Me</a>
                    </div>

                    <img src={project} alt="Project in your mind" className="project__img"></img>
                </div>
            </section>
        </Fragment>
     );
}
 
export default Project;