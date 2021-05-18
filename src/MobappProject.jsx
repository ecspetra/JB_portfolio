import React from "react";
import DemoTwoBtn from "./DemoTwoBtn.jsx";

const MobappProject = () => {
  return (
    <div className="projects-screen__container-mobapp">
      <div className="projects-screen__container-mobapp__images">
        <div
          className="projects-screen__container-mobapp__images__item"
          id="mobapp-img-1"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="100"
        ></div>
        <div
          className="projects-screen__container-mobapp__images__item"
          id="mobapp-img-2"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="100"
        ></div>
      </div>
      <div className="projects-screen__container-mobapp__images-mob">
        <div
          className="projects-screen__container-mobapp__images-mob__item"
          id="mobapp-img-1-mob"
        ></div>
        <div
          className="projects-screen__container-mobapp__images__item-mob"
          id="mobapp-img-2-mob"
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
        <DemoTwoBtn />
      </div>
    </div>
  );
};

export default MobappProject;
