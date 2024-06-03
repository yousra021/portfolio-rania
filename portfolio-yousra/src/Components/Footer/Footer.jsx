import React from "react";
import "./Footer.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img class="footer_logo" src={theme_pattern} alt="theme_pattern" />

          <h1>Yousra</h1>
        </div>
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
