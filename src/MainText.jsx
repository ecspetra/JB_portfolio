import React from "react";

const MainText = () => {
  return (
    <div className="main-screen__container">
      <div className="main-screen__container__description">
        <div className="main-screen__container__description__headline">
          Julia`s <br />
          <span id="front-end" data-aos="fade-left" data-aos-duration="3000">
            Front-End
          </span>
          <span id="portfolio" data-aos="fade-right" data-aos-duration="3000">
            Portfolio.
          </span>
        </div>
        <div className="main-screen__container__description__paragraph">
          I have 5 years of experience in development of Landing Page design,
          corporate sites. I have developed advertising campaigns for the
          largest book resources – LiveLib and Litres (tests, contests, banners,
          presentations, page branding).{" "}
          <span>Now I want to start a career as a Front-End developer.</span>
          <button className="main-screen__container__description__cta-button cta-button">
            <a href="index.html">
              View projects
              <svg
                data-name="\u0421\u043B\u043E\u0439 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 968.2 151.8"
              >
                <path
                  fill="#fff"
                  d="M892.3 0l-22.8 22.8 36.9 37H0V92h906.4l-36.9 37 22.8 22.8 75.9-75.9L892.3 0z"
                />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainText;
