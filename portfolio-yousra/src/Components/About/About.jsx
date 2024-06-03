import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>À propos de moi</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img class="profile_img " src={profile_img} alt="profile img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              J'aime le développement web car chaque projet est une nouvelle
              aventure, avec ses propres défis à surmonter et des opportunités
              d'apprentissage infinies. Le développement web est un domaine
              dynamique où l'innovation est constante, ce qui me motive à rester
              à jour et à continuer à me perfectionner.
            </p>
            <p>
              Je joue aux jeux vidéo depuis que je suis petite, et cette passion
              m'a naturellement menée vers le développement web. Les deux
              domaines partagent une combinaison fascinante de créativité et de
              résolution de problèmes. Le développement web me permet d'exploiter
              cette passion en transformant des idées en réalités numériques
              captivantes, tout comme les jeux vidéo ont transformé mon
              imagination en aventures mémorables
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>MySql</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1</h1>
          <p>ANNÉE D'ÉXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJETS COMPLÉTÉS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
