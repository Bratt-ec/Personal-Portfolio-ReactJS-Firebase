import React,{Fragment} from 'react';
import avatar from "../img/avataaars.png";

const Home = () => {
    

    return ( 
    <Fragment>
        <section className="home" id="home">
            <div className="home__container bd-grid">
                <div className="home__data">
                    <div className="home__img">
                        <img src={avatar} alt="Profile photo"/>
                    </div>

                    <h1 className="home__title">Bryan Alejandro Castro</h1>
                    <span className="home__profession">Freelance Software Developer</span>
                    {/* <!-- social icons --> */}
                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/bryan-alejandro-castro-prado-203224176/" target="_blank" rel="noopener noreferrer" className="home__social-link"><i className="bx bxl-linkedin" /></a>
                        <a href="https://github.com/Bratt-ec" target="_blank" rel="noopener noreferrer" className="home__social-link"><i className="bx bxl-github"/></a>
                        <a href="https://www.facebook.com/Bratt.Unix" target="_blank" rel="noopener noreferrer" className="home__social-link"><i className="bx bxl-facebook-circle"/></a>
                        <a href="https://e-nexuslab.blogspot.com/" target="_blank" rel="noopener noreferrer" className="home__social-link"><i className="bx bxl-blogger"/></a>
                    </div>

                    <a href="https://drive.google.com/file/d/1JCTw9miZQdichRVGe9x7m86vYONI1qve/view?usp=sharing"  target="_blank" rel="noopener noreferrer" className="button home__button">Donwload Resume</a>

                </div>
            </div>
        </section>
    </Fragment>
     );
}
 
export default Home;