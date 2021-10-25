import React from "react";
// import { Link } from "react-router-dom";
import perfilImg from "../assets/images/perfil_photo.png";
import Sidebar from "./Sidebar.jsx";
import "../assets/styles/App.scss";
import "../assets/styles/home.scss";

const Home = () => {
  return (
    <div className="mainContainer">
      {/* <div className="sidebarContent"></div>
      <div className="homeContent"></div> */}
      <Sidebar photo={perfilImg} />

      <div className="homeContent">
        <div className="presentationContainer">
          <div className="profile">
            <h2>Hi! My name is Catalina</h2>
            <p>Nuclear Engineer | Web Developer</p>
            <div className="redes">
              <a href="https://www.linkedin.com/in/catalina-carabajal/">
                <i class="bx bxl-linkedin-square"></i>
              </a>
              <a href="https://github.com/catwin94">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://www.instagram.com/catacarabajal/?hl=es">
                <i class="bx bxl-instagram-alt"></i>
              </a>
            </div>
          </div>

          <img className="perfil-img" src={perfilImg} alt="" />
        </div>
        <section className="aboutContainer">
          <div className="about">
            <h3>About Me</h3>
            <p>
              I am a Nuclear Engineer willing to change my carreer focus to web
              development. I have almost 3 year experience working with C++ for
              the development of a Monte Carlo code.
            </p>
            <p>
              Working in that area I realized I liked a lot programming and not
              so much research and physics, for what I started studying
              Front-End development using ReactJS, JavaScript, HTML, CSS, etc to
              become a Full-Stack developer.
            </p>
            <p>
              I enjoyed a lot the courses about web development and I feel very
              motivated to keep learning both Front-End and Back-End skills.
            </p>
            <p>
              I am currently looking for jobs on that area. I speak spanish
              (native), english (advanced) and some french.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
