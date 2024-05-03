import React from "react";
import "./Footer.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img class="footer_logo" src={theme_pattern} alt="theme_pattern" />

          <h1>Yousra</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab
            reiciendis aspernatur est, et minus vitae.
          </p>
        </div>
        {/* <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user_icon" />
            <input type="email" placeholder="Entrer votre mail" />
          </div>
          <div className="footer-subscribe">S'abonner</div>
        </div> */}
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">Copyright</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Contactez-moi</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
