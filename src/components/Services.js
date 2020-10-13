import React from 'react';

const Services = () => {
    return ( 
        <section className="services section" id="services">
        <span className="section-subtitle">What I Offer?</span>
        <h2 className="section-title">My Services</h2>

        <div className="services__container bd-grid">
            <div className="services__content">
                <i className="bx bx-code services__icon"></i>
                <h3 className="services__title">Web Design</h3>
                <p className="services__description">
                    Development of web pages and systems for any person, 
                    company or student. Using technologies such as 
                    JavaScript, CSS, HTML, React and Google Firebase.</p>
            </div>

            <div className="services__content">
                <i className="bx bx-windows services__icon"></i>
                <h3 className="services__title">Software Development</h3>
                <p className="services__description">
                    Development of Windows applications for commercial 
                    use such as: sales control, inventory, personnel, etc. 
                    Using C#, the Microsoft Visual Studio IDE and soon ElectronJS</p>
            </div>

            <div className="services__content">
                <i className="bx bx-user-voice services__icon"></i>
                <h3 className="services__title">Lessons and advice</h3>
                <p className="services__description">
                    Computer and Office Automation Consulting. 
                    Classes of Programming Fundamentals, Development in different languages, 
                    Mathematics for programming, etc.</p>
            </div>

            <div className="services__content">
                <i className="bx bx-server services__icon"></i>
                <h3 className="services__title">Backend Development</h3>
                <p className="services__description">
                    Backend development for web interfaces and applications using PHP and Asp.net, for any person and company </p>
            </div>

            <div className="services__content">
                <i className="bx bxs-megaphone services__icon"></i>
                <h3 className="services__title">Digital Marketing</h3>
                <p className="services__description">
                    Creation and planning of marketing strategies, 
                    development and administration of websites and 
                    social networks for the promotion and sale of products or services.</p>
            </div>

            <div className="services__content">
                <i className="bx bx-mobile services__icon"></i>
                <h3 className="services__title">Interface Movil</h3>
                <p className="services__description">
                    Design of simple and elegant mobile applications, for any person and company</p>
            </div>
        </div>
    </section>
     );
}
 
export default Services;