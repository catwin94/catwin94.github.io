import React from "react";

import Sidebar from "./Sidebar.jsx";

import "../assets/styles/home.scss";

const homeData = {
  about: [
    "I am a Nuclear Engineer willing to change my carreer focus to web development. I have almost 3 year experience working with C++ for the development of a Monte Carlo code.",
    "Working in that area I realized I liked a lot programming and not so much research and physics, for what I started studying Front-End development using ReactJS, JavaScript, HTML, CSS, etc to become a Full-Stack developer.",
    "I enjoyed a lot the courses about web development and I feel very motivated to keep learning both Front-End and Back-End skills.",
    "I am currently looking for jobs on that area. I speak spanish (native), english (advanced) and some french.",
  ],
  education: [],
  work: [],
  languages: ["Spanish(native)", "English(advanced)", "French(begginer)"],
  programing: ["C++", "Python", "JavaScript", "Matlab"],
  web: ["HTML", "CSS", "SASS", "React JS", "Redux", "JSon"],
  dataScience: ["Pandas", "Numpy", "MatplotLib"],
  otherPrograming: [
    "Git",
    "Unix",
    "Tripoli-4",
    "RELAP",
    "Autodesk - AutoCAD 2D",
    "MCNP - Los Alamos National Lab",
    "Mathcad PTC",
    "GammaVision (Gamma Spectroscopy)",
  ],
};

const AboutMe = () => {
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
              {/* <h3>About Me</h3> */}
              {homeData.about.map((text) => (
                <p>{text}</p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
