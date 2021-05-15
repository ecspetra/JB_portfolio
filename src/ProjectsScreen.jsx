import React from "react";
import BuildingsProject from "./BuildingsProject.jsx";
import MobappProject from "./MobappProject.jsx";

const ProjectsScreen = () => {
  return (
    <div className="projects-screen">
      <BuildingsProject />
      <MobappProject />
    </div>
  );
};

export default ProjectsScreen;
