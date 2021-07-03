import React from "react";
import DemoTRVLBtn from "./DemoTRVLBtn.jsx";

const TRVLProject = () => {
  return (
    <div className="projects-screen__container-trvl">
      <div className="projects-screen__container-trvl__images">
        <div
          className="projects-screen__container-trvl__images__item"
          id="trvl-img-1"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="100"
        ></div>
        <div
          className="projects-screen__container-trvl__images__item"
          id="trvl-img-2"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="100"
        ></div>
      </div>
      <div className="projects-screen__container-trvl__images-mob">
        <div
          className="projects-screen__container-trvl__images-mob__item"
          id="trvl-img-1-mob"
        ></div>
        <div
          className="projects-screen__container-trvl__images__item-mob"
          id="trvl-img-2-mob"
        ></div>
      </div>
      <div className="projects-screen__container-trvl__description">
        <div className="projects-screen__container-trvl__description__headline">
          <span>Travel</span>
          <br /> Project
        </div>
        <div className="projects-screen__container-trvl__description__paragraph">
          A project for a travel company, laid out on <span>Grid</span>.
          Includes One Page Scroll and Slick Slider. Adapted for all devices and
          cross-browser.
        </div>
        <DemoTRVLBtn />
      </div>
    </div>
  );
};

export default TRVLProject;
