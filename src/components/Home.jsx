import React from "react";
// import { Link } from "react-router-dom";
import perfilImg from "../assets/images/perfil_photo.png";
import Sidebar from "./Sidebar.jsx";
import "../assets/styles/App.scss";
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

const Home = () => {
  return (
    <div className="mainContainer">
      {/* <div className="sidebarContent"></div>
      <div className="homeContent"></div> */}
      <Sidebar />

      <div className="homeContent">
        <div className="presentationContainer">
          <div className="profile">
            <h2>Hi! My name is Catalina</h2>
            <p>Nuclear Engineer | Web Developer</p>
            <div className="redes">
              <a
                href="https://www.linkedin.com/in/catalina-carabajal/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-linkedin-square"></i>
              </a>
              <a
                href="https://github.com/catwin94"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.instagram.com/catacarabajal/?hl=es"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bxl-instagram-alt"></i>
              </a>
            </div>
          </div>

          <img className="perfil-img" src={perfilImg} alt="" />
        </div>
        <section className="dataContainer">
          <div className="infoContainer">
            <h3>About Me</h3>
            {homeData.about.map((text) => (
              <p>{text}</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
