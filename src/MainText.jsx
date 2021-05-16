import React from "react";
import ProjectsBtn from "./ProjectsBtn.jsx";

const MainText = () => {
  return (
    <div className="main-screen__container">
      <div className="main-screen__container__description">
        <div className="main-screen__container__description__headline">
          Julia`s <br />
          <div className="main-screen__container__description__headline__text">
            <h1 id="front-end" className="glitched">
              Front-End
            </h1>
            <h1 id="portfolio" className="glitched">
              Portfolio.
            </h1>
          </div>
        </div>
        <div className="main-screen__container__description__paragraph">
          I have 5 years of experience in development of Landing Page design,
          corporate sites. I have developed advertising campaigns for the
          largest book resources – LiveLib and Litres (tests, contests, banners,
          presentations, page branding).{" "}
          <span>Now I want to start a career as a Front-End developer.</span>
          <ProjectsBtn />
        </div>
      </div>
    </div>
  );
};

export default MainText;
