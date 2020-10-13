import React,{Fragment} from 'react';
import work1 from "../img/work1.jpg";
import WorkMenu from './WorkMenu';
import { db } from '../firebase';

const ReactJs = () => {
    // Funciones

    // 
    return (         
        <Fragment>
            <WorkMenu />
            <section className="works section" id="works">
                <span className="section-subtitle">Recent Works</span>
                <h2 className="section-title">REACT JS</h2>
                
                <div className="works__container bd-grid">
                    { 
                        db.collection('Portafolio')
                        .where("lang", "==", "react").onSnapshot( (querySnapshot)=>{                            
                            const content =  document.querySelector('.works__container');
                            querySnapshot.forEach(doc =>{
                                const divWorks  = document.createElement('div');
                                
                                divWorks.classList.add('works__img');
                                divWorks.innerHTML =`
                                    <img src=${ work1} alt="" ></img>

                                    <div class="works__data">
                                    <a href=${doc.data().url} target="_blank"  rel="noopener noreferrer" class="works__link"><i class="bx bx-link-alt"></i></a>
                                        <span className="works__title" style="color: var(--first-color-lighten)"> 
                                            ${ doc.data().nombre }
                                        </span>
                                    </div>
                                `;
                                content.appendChild(divWorks);
                            });
                        })                                   
                    }
                </div>
            </section> 

        </Fragment> );
}
 
export default ReactJs;