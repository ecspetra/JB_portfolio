import React from "react";

const CVDescription = () => {
  return (
    <div className="cv-screen__container__description">
      <div
        className="cv-screen__container__description__headline"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-offset="100"
      >
        Want to see my <span id="cv">CV</span>?{" "}
        <span id="download">Download it!</span>
      </div>
      <div className="cv-screen__container__description__paragraph">
        I will be glad to work <span>with you</span> ;)
      </div>
      <div className="cv-screen__container__description__download">
        <a
          href="https://ecspetra.github.io/JB_portfolio/src/CV_Julia_Buts_Front-End-Developer.pdf"
          download
        >
          <svg
            id="prefix__f6f47cde-1745-42b3-bf19-bff146ebb438"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 56 76"
            xmlSpace="preserve"
          >
            <style>{".prefix__st0{fill:#ff6a2f}.prefix__st1{fill:#fff}"}</style>
            <path
              className="prefix__st0"
              d="M54 22v52H2V22h52m2-2H0v56h56V20z"
            />
            <path
              className="prefix__st0"
              d="M17.9 47.8c1 0 2.1.1 3.1.4.8.2 1.7.6 2.4 1 .6.4 1.1.8 1.7 1.2.4.3.7.6 1 1l.3.4-2.1 2.2c-.1-.1-.1-.2-.3-.3-.2-.3-.5-.5-.8-.8-.4-.4-.8-.7-1.3-1-.6-.3-1.2-.6-1.8-.8-.8-.2-1.5-.3-2.3-.3-4.3 0-7.8 3.4-7.8 7.7v.1c0 4.3 3.4 7.8 7.6 7.8h.2c.8 0 1.6-.1 2.4-.3.7-.2 1.3-.5 1.9-.8.5-.3.9-.6 1.3-1 .3-.2.6-.5.8-.8l.2-.4 2.1 2.1c-.1.2-.2.3-.4.5-.3.4-.7.7-1.1 1-.5.5-1.1 1-1.8 1.4-.8.4-1.6.8-2.4 1-1 .3-2 .5-3.1.4-3 .1-5.8-1.1-7.9-3.2-2.1-2-3.3-4.8-3.2-7.7 0-2.9 1.1-5.7 3.2-7.7 2.3-2 5.1-3.2 8.1-3.1zM36.9 69.1l-8.3-21H32l6.5 16.8L45 48.1h3.4l-8.2 21h-3.3z"
            />
            <path
              className="prefix__st1"
              d="M8 37.1h40V40H8v-2.9zM40.8 18.5l-2-2-9.4 9.4V0h-2.9v25.9l-9.4-9.4-2 2L28 31.4l12.8-12.9z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CVDescription;
