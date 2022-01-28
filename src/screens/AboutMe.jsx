import React from "react";

import Sidebar from "../components/Sidebar.jsx";

import "../assets/styles/home.scss";
import { useSelector } from "react-redux";

const AboutMe = () => {
  const aboutMe = useSelector((state) => state.data.aboutMe);

  return (
    <div className="mainContainer">
      <Sidebar />
      <div className="homeContent">
        <div className="sectionContainer">
          <div className="mainTitle">
            <h1>About me</h1>
          </div>
          <section className="dataContainer ">
            <div className="infoContainer">
              {aboutMe.map((text, key) => (
                <p key={key}>{text}</p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
