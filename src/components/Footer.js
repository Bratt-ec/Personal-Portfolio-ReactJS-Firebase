import React,{Fragment} from 'react';

const Footer = () => {
    return ( 
        <Fragment>
            <footer className="footer section">
                <div className="footer__container bd-grid">
                    <h1 className="footer__title">Bryan Alejandro Castro</h1>
                    <p className="footer__description">I'm Bryan and this is my personal website, consult me here</p>

                    <div className="footer__social">
                        <a href="https://www.facebook.com/Bratt.Unix" target="_blank" rel="noopener noreferrer" className="footer__link"><i className='bx bxl-facebook-square'></i></a>
                        <a href="https://github.com/Bratt-ec" target="_blank" rel="noopener noreferrer" className="footer__link"><i className='bx bxl-github' ></i></a>
                        <a href="https://www.linkedin.com/in/bryan-alejandro-castro-prado-203224176/" target="_blank" rel="noopener noreferrer" className="footer__link"><i className='bx bxl-linkedin-square' ></i></a>
                        <a href="https://www.instagram.com/bryancastro.ec/?hl=es-la" target="_blank" rel="noopener noreferrer" className="footer__link"><i className='bx bxl-instagram' ></i></a>
                    </div>

                    <p className="footer__copy">All right reserved by Bryan Alejandro Castro - 2020</p>
                </div>
            </footer>
        </Fragment>
     );
}
 
export default Footer;