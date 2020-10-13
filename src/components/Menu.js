import React from 'react';

 
const Menu = () => {

    const navMenu = document.querySelector('#nav-menu');

      /*===== ACTIVE AND REMOVE MENU =====*/
      const navLink = document.querySelectorAll('.nav__link');
      
      function linkAction(){
        navMenu.classList.remove('show');
      }
      navLink.forEach(n => n.addEventListener('click', linkAction));
      
      /*===== SCROLL SECTIONS ACTIVE LINK =====*/
      const sections = document.querySelectorAll('section[id]');
      
      window.addEventListener('scroll', scrollActivate);
      
      function scrollActivate(){
        const scrollY = window.pageYOffset;
        
        sections.forEach( current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
        
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
      }

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
                        <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#education" className="nav__link">Education</a></li>
                        <li className="nav__item"><a href="#services" className="nav__link">Services</a></li>
                        <li className="nav__item"><a href="#works" className="nav__link">Portfolio</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact me</a></li>
                    </ul>
                </div>
            </nav>
        </header>
      );
 }
  
 
 export default Menu;