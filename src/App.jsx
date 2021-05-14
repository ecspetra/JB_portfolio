import React from "react";
import MainScreen from "./MainScreen.jsx";
import "./style.scss";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <MainScreen />
        <div className="projects-screen"></div>
      </div>
    </div>
  );
};

export default App;
