import React from "react";
import DemoMuscleroomBtn from "./DemoMuscleroomBtn.jsx";

const MuscleroomProject = () => {
  return (
    <div className="projects-screen__container-muscleroom">
      <div className="projects-screen__container-muscleroom__images">
        <div
          className="projects-screen__container-muscleroom__images__item"
          id="muscleroom-img-1"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-offset="100"
        ></div>
        <div
          className="projects-screen__container-muscleroom__images__item"
          id="muscleroom-img-2"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="100"
        ></div>
      </div>
      <div className="projects-screen__container-muscleroom__images-mob">
        <div
          className="projects-screen__container-muscleroom__images-mob__item"
          id="muscleroom-img-1-mob"
        ></div>
        <div
          className="projects-screen__container-muscleroom__images-mob__item"
          id="muscleroom-img-2-mob"
        ></div>
      </div>
      <div className="projects-screen__container-muscleroom__description">
        <div className="projects-screen__container-muscleroom__description__headline">
          <span>
            Muscle
            <br />
            room
            <br />
          </span>{" "}
          Project
        </div>
        <div className="projects-screen__container-muscleroom__description__paragraph">
          A project for the showroom, laid out on <span>Grid</span>. Includes
          some JQuery plugins, Fancybox and Slick Slider. Adapted for all
          devices and cross-browser.
        </div>
        <DemoMuscleroomBtn />
      </div>
    </div>
  );
};

export default MuscleroomProject;
