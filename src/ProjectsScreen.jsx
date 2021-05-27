import React from "react";
import MuscleroomProject from "./MuscleroomProject.jsx";
import BuildingsProject from "./BuildingsProject.jsx";
import MobappProject from "./MobappProject.jsx";

const ProjectsScreen = () => {
  return (
    <div className="projects-screen" id="projects">
      <MuscleroomProject />
      <MobappProject />
      <BuildingsProject />
    </div>
  );
};

export default ProjectsScreen;
