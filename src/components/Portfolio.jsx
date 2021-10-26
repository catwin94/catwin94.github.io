import React from "react";
import Sidebar from "./Sidebar.jsx";
import "../assets/styles/portfolio.scss";
import "../assets/styles/home.scss";

const Portfolio = () => {
  return (
    <div className="mainContainer">
      <Sidebar />
      <div className="homeContent">
        <div className="portfolioContainer">
          <div className="portfolio">
            <h1>Portfolio</h1>
          </div>
          <div className="navBarPortfolio">
            <ul>
              <li>
                <i class="bx bxs-briefcase"></i>
                <h3>Experience</h3>
              </li>
              <li>
                <i class="bx bxs-graduation"></i>
                <h3>Education</h3>
              </li>
              <li>
                <i class="bx bx-book-open"></i>
                <h3>Courses</h3>
              </li>
              <li>
                <i class="bx bx-book-open"></i>
                <h3>Skills</h3>
              </li>
            </ul>
          </div>
          <div className="dataContainer">
            <div className="portfolioTitle">
              <h3>Experience</h3>
            </div>
            <div className="portfolioData">
              <ul>
                <li>
                  <i class="bx bxs-diamond"></i>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet rerum maxime labore, numquam est, aut error
                    voluptates dicta laborum aliquam quibusdam? At quas deserunt
                    asperiores, tempore optio sed soluta commodi?
                  </p>
                </li>
                <li>
                  <i class="bx bxs-diamond"></i>
                  <p>Segundo</p>
                </li>
                <li>
                  <i class="bx bxs-diamond"></i>
                  <p>Tercero</p>
                </li>
              </ul>
            </div>
            {/* <div className="infoContainer">
              <p>Holis</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
