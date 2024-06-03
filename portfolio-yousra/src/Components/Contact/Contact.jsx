import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const sendEmail = async (formData) => {
        try {
            const serviceID = 'service_w7jvb2g';
            const templateID = 'template_wl8vy3a';
            const userID = 'FAb_wYmgqpWvWC536';

            await emailjs.send(serviceID, templateID, formData, userID);
            setResult("Formulaire envoyé avec succès !");
            alert("Formulaire envoyé avec succès !");
        } catch (error) {
            console.error('Error sending email:', error);
            setResult("Erreur lors de l'envoi du formulaire.");
            alert("Erreur lors de l'envoi du formulaire.");
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Envoie...");
        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value
        };
        
        sendEmail(formData);
        event.target.reset();
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Prendre contact</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Échangeons</h1>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>belbaz.yousra@epitech.eu</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+33 6 16 49 03 53</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Paris</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Votre Nom</label>
                    <input type="text" placeholder="Entrer votre nom" name="name" required />
                    <label htmlFor="">Votre Mail</label>
                    <input type="email" placeholder="Entrer votre mail" name="email" required />
                    <label htmlFor="">Écrivez votre message ici</label>
                    <textarea
                        name="message"
                        rows="8"
                        placeholder="Entrer votre message"
                        required
                    ></textarea>
                    <button type="submit" className="contact-submit">
                        Envoyez maintenant
                    </button>
                    <div>{result}</div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
