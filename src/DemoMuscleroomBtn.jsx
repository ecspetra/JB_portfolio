import React from "react";

const DemoMuscleroomBtn = () => {
  return (
    <button
      className="projects-screen__container-muscleroom__description__cta-button cta-button"
      onClick={(e) => window.open("https://ecspetra.github.io/dodge/")}
    >
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
    </button>
  );
};

export default DemoMuscleroomBtn;
