import React,{Fragment} from 'react';
import * as emailjs from 'emailjs-com';

const Contact = (props) => {

    const { name,mail,proj,msj, saveName,saveMail,saveProj,saveMsj} = props;

    function mostrarAlerta(){
        const formulario = document.querySelector('#contact__form');
        alert('Mensaje enviado con éxito');
        formulario.reset();
    }



    function handleSubmit(e){
        e.preventDefault();

        if( name === '' || mail === '' || proj === '' || msj === ''){
            alert('Todos los campos son obligatorios');
        }
        else{
            emailjs.sendForm(
                'gmail', 
                'template_grso59t', 
                'contact__form', 
                'user_2CS5qYuN37JETnnRRdJ8U')
            .then(
                mostrarAlerta()
            )
            .catch();
        }

    }

    return ( 
        <Fragment>
            <section className="contact section" id="contact">
                <span className="section-subtitle">Contact Me</span>
                <h2 className="section-title">Open to collaboration and business.  </h2>
                

                <div className="contact__container bd-grid">
                    <form className="contact__form" id="contact__form"  onSubmit={handleSubmit}>
                        <div className="contact__inputs">
                            <input 
                             type="text"
                             placeholder="Name" 
                             name="name" 
                             className="contact__input" 
                             onChange = { e => { saveName(e.target.value) } }                        
                            />
                            <input 
                            type="mail" 
                            placeholder="Email" 
                            name="from_name" 
                            className="contact__input"
                            onChange = { e => { saveMail(e.target.value) } }    
                            />
                        </div>

                        <input 
                        type="text" 
                        placeholder="Project" 
                        name="project"  
                        className="contact__input"
                        onChange = { e => { saveProj(e.target.value) } }    
                        />

                        <textarea 
                        name="message" 
                        cols="0" rows="10" 
                        placeholder="Write your message" 
                        className="contact__input"
                        onChange = { e => { saveMsj(e.target.value) } }    
                        >
                        </textarea>

                        <input type="submit" value="Send Message" className="button contact__button"></input>

                    </form>

                    <div>
                        <div className="contact__info">
                            <h3 className="contact__subtitle">Call me</h3>
                            <span className="contact__text">+593 963642121</span>
                            <span className="contact__text">+593 7 214 8451</span>
                        </div>

                        <div className="contact__info">
                            <h3 className="contact__subtitle">E-mail</h3>
                            <span className="contact__text">e.nexus.lab@gmail.com</span>
                            <span className="contact__text">bry2098@gmail.com</span>
                        </div>

                        <div className="contact__info">
                            <h3 className="contact__subtitle">Location</h3>
                            <span className="contact__text">Cdla. Brisas de América</span>
                            <span className="contact__text">Huaquillas - Ecuador</span>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default Contact;