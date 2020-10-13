import React,{Fragment} from 'react';

import work1 from "../img/work1.jpg";
import work2 from "../img/work2.jpg";
import work3 from "../img/work3.jpg";
import work4 from "../img/work4.jpg";
import work5 from "../img/work5.jpg";
import work6 from "../img/work6.jpg";
import {
    Link,
  } from "react-router-dom";


const Works = () => {
    return ( 
        <Fragment>
            <section className="works section" id="works">
                <span className="section-subtitle">My Portfolio</span>
                <h2 className="section-title">Recent Works</h2>
                
                <div className="works__container bd-grid">

                    <div className="works__img">
                        <img src={ work1} alt="React" />

                        <div className="works__data">
                        <Link to="/react"><a className="works__link"><i className="bx bx-link-alt"></i></a></Link>
                            <span className="works__title">REACT JS</span>
                        </div>
                    </div>

                    <div className="works__img">
                        <img src={work2} alt="PHP" />

                        <div className="works__data">
                        <Link to="/php"><a className="works__link"><i className="bx bx-link-alt"></i></a></Link>
                            <span className="works__title">PHP</span>
                        </div>
                    </div>

                    <div className="works__img">
                        <img src={work3} alt="Javascript" />

                        <div className="works__data">
                        <Link to="/javascript"><a className="works__link"><i className="bx bx-link-alt"></i></a></Link>
                            <span className="works__title">JAVASCRIPT</span>
                        </div>
                    </div>

                    <div className="works__img">
                        <img src={work4} alt="Html-Css" />

                        <div className="works__data">
                        <Link to="/html"><a className="works__link"><i className="bx bx-link-alt"></i></a></Link>
                            <span className="works__title">HTML - CSS</span>
                        </div>
                    </div>

                    <div className="works__img">
                        <img src={work5} alt="Csharp" />

                        <div className="works__data">
                        <Link to="/csharp"><a className="works__link"><i className="bx bx-link-alt"></i></a></Link>
                            <span className="works__title">C#</span>
                        </div>
                    </div>

                    <div className="works__img">
                        <img src={work6} alt="Nodejs" />

                        <div className="works__data">
                        <Link to="/node"><a className="works__link"><i className="bx bx-link-alt"></i></a></Link>
                            <span className="works__title">NODE JS</span>
                        </div>
                    </div>
                </div>
            </section> 
        </Fragment>
     );
}
 
export default Works;