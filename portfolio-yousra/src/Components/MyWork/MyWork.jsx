import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import puissance4_video from "../../assets/project_puissance4-video.mov";
import maquetteresponsive_video from "../../assets/project_maquetteresponsive-video.mov";
import mycinema_video from "../../assets/project_mycinema-video.mov";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>Mes derniers projets</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="mywork-container">
        <div className="mywork-work-title">
          <video controls autoplay>
            <source src={puissance4_video} type="video/mp4" />
          </video>
          <h2>Puissance 4</h2>
        </div>
        <div className="mywork-work-title">
          <video controls autoPlay>
            <source src={maquetteresponsive_video} type="video/mp4" />
          </video>
          <h2>Maquette responsive</h2>
        </div>
        <div className="mywork-work-title">
          <video controls autoPlay>
            <source src={mycinema_video} type="video/mp4" />
          </video>
          <h2>My cinema</h2>
        </div>
      </div>
      <div className="mywork-showmore">
        <p>Montrer plus</p>
        <img src={arrow_icon} alt="arrow_icon" />
      </div>
    </div>
  );
};

export default MyWork;
