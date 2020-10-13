import React ,{ Fragment } from 'react';
import work5 from "../img/work5.jpg";
import WorkMenu from './WorkMenu';
import { db } from '../firebase';

const Csharp = () => {
    return ( 
        <Fragment>
        <WorkMenu />
        <section className="works section" id="works">
            <span className="section-subtitle">Recent Works</span>
            <h2 className="section-title">C#</h2>
            
            <div className="works__container bd-grid">
                { 
                    db.collection('Portafolio')
                    .where("lang", "==", "csharp").onSnapshot( (querySnapshot)=>{
                        const content =  document.querySelector('.works__container');
                        querySnapshot.forEach(doc =>{

                            const divWorks  = document.createElement('div');
                            
                            divWorks.classList.add('works__img');
                            divWorks.innerHTML =`
                                <img src=${ work5 } alt="" ></img>

                                <div class="works__data">
                                <a href=${doc.data().url} class="works__link" target="_blank"  rel="noopener noreferrer" ><i class="bx bx-link-alt"></i></a>
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

    </Fragment>
     );
}
 
export default Csharp;