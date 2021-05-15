import React from "react";

const MobappProject = () => {
  return (
    <div className="projects-screen__container-mobapp">
      <div className="projects-screen__container-mobapp__images">
        <div
          className="projects-screen__container-mobapp__images__item"
          id="mobapp-img-1"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="500"
        ></div>
        <div
          className="projects-screen__container-mobapp__images__item"
          id="mobapp-img-2"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="300"
        ></div>
      </div>
      <div className="projects-screen__container-mobapp__description">
        <div className="projects-screen__container-mobapp__description__headline">
          <span>Mobapp</span> Project
        </div>
        <div className="projects-screen__container-mobapp__description__paragraph">
          A project for a business application, laid out on{" "}
          <span>Bootstrap</span>. Includes Slick Slider, Scalable Vector
          Graphics and animations. Adapted for all devices and cross-browser.
        </div>
        <button className="projects-screen__container-mobapp__description__cta-button cta-button">
          <a href="https://ecspetra.github.io/example-2/" target="_blank">
            Demo
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
  );
};

export default MobappProject;
