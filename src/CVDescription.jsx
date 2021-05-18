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
          href="https://ecspetra.github.io/JB_portfolio/src/CV_Julia_Buts_Junior_Front-End-Developer.pdf"
          download
        >
          <svg
            id="prefix__f6f47cde-1745-42b3-bf19-bff146ebb438"
            data-name="\u0421\u043B\u043E\u0439 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 76"
          >
            <defs>
              <style>
                {
                  ".prefix__a7b67a46-e8b6-4324-872a-717e2c6f63c0{fill:#ea496a}.prefix__fc26a857-42d3-4732-af5b-e383894017d0{fill:#fff}"
                }
              </style>
            </defs>
            <path
              className="prefix__a7b67a46-e8b6-4324-872a-717e2c6f63c0"
              d="M54 2v52H2V2h52m2-2H0v56h56V0z"
              transform="translate(0 20)"
            />
            <path
              className="prefix__a7b67a46-e8b6-4324-872a-717e2c6f63c0"
              d="M17.88 27.81a11.1 11.1 0 013.07.42 9.27 9.27 0 012.42 1 16.73 16.73 0 011.68 1.19 6.9 6.9 0 011.05 1l.32.41L24.33 34c-.06-.08-.14-.19-.26-.33a8.73 8.73 0 00-.77-.77 7.45 7.45 0 00-1.29-1 8.38 8.38 0 00-1.79-.75 8.17 8.17 0 00-2.34-.34 7.73 7.73 0 00-7.8 7.79 7.73 7.73 0 007.8 7.81 7.9 7.9 0 002.35-.34 7.59 7.59 0 001.87-.83 13.31 13.31 0 001.3-1 7.46 7.46 0 00.84-.81l.24-.37 2.1 2.11a3.74 3.74 0 01-.35.46 12.28 12.28 0 01-1.07 1A12.73 12.73 0 0123.4 48a10.94 10.94 0 01-2.4 1 10.7 10.7 0 01-3.09.45A10.86 10.86 0 0110 46.26a10.31 10.31 0 01-3.22-7.66A10.33 10.33 0 0110 30.94a10.85 10.85 0 017.88-3.13zM36.93 49.11l-8.26-21h3.45l6.45 16.8L45 28.1h3.44l-8.25 21z"
              transform="translate(0 20)"
            />
            <path
              className="prefix__fc26a857-42d3-4732-af5b-e383894017d0"
              d="M8 17.08h40v2.86H8zM40.83-1.46l-2-2-9.4 9.4V-20h-2.86V5.92l-9.4-9.4-2 2L28 11.38z"
              transform="translate(0 20)"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CVDescription;
