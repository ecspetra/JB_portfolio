import React from "react";
import DemoOneBtn from "./DemoOneBtn.jsx";

const BuildingsProject = () => {
  return (
    <div className="projects-screen__container-buildings">
      <div className="projects-screen__container-buildings__images">
        <div
          className="projects-screen__container-buildings__images__item"
          id="buildings-img-1"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-offset="500"
        ></div>
        <div
          className="projects-screen__container-buildings__images__item"
          id="buildings-img-2"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="300"
        ></div>
      </div>
      <div className="projects-screen__container-buildings__description">
        <div className="projects-screen__container-buildings__description__headline">
          <span>Buildings</span> Project
        </div>
        <div className="projects-screen__container-buildings__description__paragraph">
          A project for a construction company, laid out on <span>FlexBox</span>
          . Includes some JQuery plugins, Slick Slider, Leaflet map and
          animations. Adapted for all devices and cross-browser.
        </div>
        <DemoOneBtn />
      </div>
    </div>
  );
};

export default BuildingsProject;