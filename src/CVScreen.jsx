import React from "react";
import CVDescription from "./CVDescription.jsx";
import Footer from "./Footer.jsx";

const CVScreen = () => {
  return (
    <div className="cv-screen">
      <div className="cv-screen__container">
        <CVDescription />
      </div>
      <Footer />
    </div>
  );
};

export default CVScreen;
