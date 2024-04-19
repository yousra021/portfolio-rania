import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profil_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import monCv from "../../assets/CV_belbaz_yousra.pdf";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img class="profile_img" src={profile_img} alt="profile-image" />
      <h1>
        <span>Yousra Belbaz, </span>developpeuse fullstack basée à Paris.
      </h1>
      <p>
        Je suis motivée, patiente et à l'écoute des autres, sachant m'adapter
        aux différentes exigences de travail. Tout en étant perseverante,
        dynamique et autonome.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact">
            Contactez-moi
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={monCv} download>
            Telechager mon CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
