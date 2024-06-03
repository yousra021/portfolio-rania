import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "95df9e54-0f06-4a0b-b3a2-b203105e2146");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
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
          <input type="text" placeholder="Entrer votre nom" name="name" />
          <label htmlFor="">Votre Mail</label>
          <input type="email" placeholder="Entrer votre mail" name="email" />
          <label htmlFor="">Écrivez votre message ici</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Entrer votre message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Envoyez maintenant
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
