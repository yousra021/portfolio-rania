import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>A propos de moi</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img class="profile_img " src={profile_img} alt="profile img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              dolor molestiae nesciunt sed accusamus quaerat, nostrum error
              assumenda reiciendis maxime doloribus sequi dolorum suscipit id
              obcaecati fugit consectetur est quam.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste aut
              nostrum numquam cumque laboriosam, totam soluta alias veniam?
              Alias eius, quas vitae dolores natus ut sed error accusamus
              suscipit consectetur!
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>PHP</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1</h1>
          <p>ANNEES D'EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJETS COMPLETE</p>
        </div>
      </div>
    </div>
  );
};

export default About;
