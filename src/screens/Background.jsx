import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import BackgroundNavBar from "../components/BackgroundNavBar.jsx";
import Skills from "../components/Skills.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Courses from "../components/Courses.jsx";
import Education from "../components/Education.jsx";
import WorkExperience from "../components/WorkExperience.jsx";
import "../assets/styles/background.scss";
import "../assets/styles/home.scss";
import "../assets/styles/cardItem.scss";

const Background = () => {
  const [check, setCheck] = useState("");

  return (
    <div className="mainContainer">
      <Sidebar />
      <div className="homeContent">
        <div className="sectionContainer">
          <div className="mainTitle">
            <h1>Background</h1>
          </div>
          <BackgroundNavBar check={check} setCheck={setCheck} />
          {check === "portfolio" && <Portfolio />}
          {check === "education" && <Education />}
          {check === "courses" && <Courses />}
          {check === "experience" && <WorkExperience />}
          {check === "skills" && <Skills />}
        </div>
      </div>
    </div>
  );
};

export default Background;
