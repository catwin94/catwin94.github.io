import React from "react";
import Sidebar from "./Sidebar.jsx";
import "../assets/styles/contactMe.scss";
import "../assets/styles/home.scss";

const ContactMe = () => {
  return (
    <div className="mainContainer">
      <Sidebar />
      <div className="homeContent">
        <div className="contactContainer">
          <div className="contact">
            <h1>Contact Me</h1>
            {/* <p>I am available for hire</p> */}
          </div>

          <div className="listContainer">
            <ul>
              <li>
                <h2>E-mail:</h2>
                <a href="mailto:cata.carabajal@gmail.com">
                  <i className="bx bx-mail-send"></i>
                  <p>cata.carabajal@gmail.com</p>
                </a>
              </li>
              <li>
                <h2>GitHub:</h2>
                <a
                  href="https://github.com/catwin94"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-github"></i>
                  <p>catwin94</p>
                </a>
              </li>
              <li>
                <h2>LinkedIn:</h2>
                <a
                  href="https://www.linkedin.com/in/catalina-carabajal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-linkedin-square"></i>
                  <p>catalina-carabajal</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
