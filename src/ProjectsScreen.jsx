import React from "react";
import TRVLProject from "./TRVLProject.jsx";
import MuscleroomProject from "./MuscleroomProject.jsx";
import BuildingsProject from "./BuildingsProject.jsx";
import MobappProject from "./MobappProject.jsx";

const ProjectsScreen = () => {
  return (
    <div className="projects-screen" id="projects">
      <TRVLProject />
      <MuscleroomProject />
      <MobappProject />
      <BuildingsProject />
    </div>
  );
};

export default ProjectsScreen;
