import React from 'react';
import {
    NavLink
  } from "react-router-dom";

 
const WorkMenu = () => {

    const navMenu = document.querySelector('#nav-menu');

      /*===== ACTIVE AND REMOVE MENU =====*/
      const navLink = document.querySelectorAll('.nav__link');
      
      function linkAction(){
        navMenu.classList.remove('show');
      }
      navLink.forEach(n => n.addEventListener('click', linkAction));
      


     return ( 
        <header className="l-header">
            <nav className="nav bd-grid">
                <div className="nav__toggle" id="nav-toggle" onClick={ () => document.querySelector('#nav-menu').classList.toggle('show') }>
                    <i className="bx bx-menu"></i>
                </div>
                <div>
                    <a href="#" className="nav__logo">Alejandro</a>
                </div>
                <div className="nav__menu" id="nav-menu">
                    <div className="nav__close" id="nav-close" onClick={()=> document.querySelector('#nav-menu').classList.remove('show') }>
                        <i className="bx bx-x"></i>
                    </div>
                    {/* Items menu */}
                    <ul className="nav__list">
                        <NavLink to="/"  ><li className="nav__item"><a className="nav__link">Home</a></li></NavLink>
                        <NavLink to="/react" className="nav__link" activeClassName="active"><li className="nav__item">React</li></NavLink>
                        <NavLink to="/php" className="nav__link" activeClassName="active"><li className="nav__item">PHP</li></NavLink>
                        <NavLink to="/javascript" className="nav__link" activeClassName="active"><li className="nav__item">JavaScript</li></NavLink>
                        <NavLink to="/html" className="nav__link" activeClassName="active"><li className="nav__item">HTML - CSS</li></NavLink>
                        <NavLink to="/csharp"className="nav__link" activeClassName="active"><li className="nav__item">C#</li></NavLink>
                        <NavLink to="/node" className="nav__link" activeClassName="active"><li className="nav__item">NODE JS</li></NavLink>
                    </ul>
                </div>
            </nav>
        </header>
      );
 }
  
 
 export default WorkMenu;