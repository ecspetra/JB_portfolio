import React from "react";
import Header from "./Header.jsx";
import TopContacts from "./TopContacts.jsx";
import MainText from "./MainText.jsx";

const MainScreen = () => {
  return (
    <div className="main-screen" id="home">
      <Header />
      <MainText />
      <TopContacts />
    </div>
  );
};
export default MainScreen;
