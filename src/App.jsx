import React from "react";
import MainScreen from "./MainScreen.jsx";
import ProjectsScreen from "./ProjectsScreen.jsx";
import CVScreen from "./CVScreen.jsx";
import "./style.scss";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <MainScreen />
        <ProjectsScreen />
        <CVScreen />
      </div>
    </div>
  );
};

export default App;
