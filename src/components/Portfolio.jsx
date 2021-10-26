import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import "../assets/styles/portfolio.scss";
import "../assets/styles/home.scss";

const data = {
  experience: {
    title: "Work Experience",
    list: [
      {
        name: "Researcher",
        date: "Nov 2019 - Oct 2021",
        enterprice: "CEA - France",
        details:
          "Development of advanced perturbation and sensitivity methods for Monte Carlo simulations. Submitted paper at PHYSOR 2022. ",
        skills: ["C++", "Tripoli-4", "Git", "Python", "Linux"],
      },
      {
        name: "Internship",
        date: "Sep 2018 - Mar 2019",
        enterprice: "CNRS - France",
        details:
          "Fast neutron detection (10 keV up to 20 MeV) with MIMAC-FastN, a 3D nuclear recoil track detector studying nuclear reactions for neutron production: 9Be(d (1.5MeV), n) , 9Be(p (3.6 MeV),n) and 7Li (p (2.5 MeV),n).",
        skills: ["C++", "Linux"],
      },
      {
        name: "Researcher",
        date: "",
        enterprice: "",
        details: "",
        skills: "",
      },
    ],
  },
  courses: {
    title: "Courses",
    list: [
      {
        name: "Frontend Developer / Platzi",
        skills: ["HTML", "CSS", "SASS", "grid & flexbox", "responsive"],
      },
      {
        name: "Basic Javascript / Platzi",
        skills: ["JavaScript"],
      },
      {
        name: "Modern Javascript Definitive Guide / Udemy",
        skills: ["JavaScript", "DOM", "React", "OOP"],
      },
      {
        name: "React.js practice course / Plazi",
        skills: ["ReactJS", "Route", "Redux", "React", "Hooks"],
      },
      {
        name: "Frameworks and Librearies of JavaScipt / Plazi",
        skills: [
          "React functional components",
          "Styled components",
          "CSS-in-JS",
        ],
      },
      {
        name: "Python Introductory course / IEEE - ITBA",
        skills: ["Python"],
      },
      {
        name: "Data Analysis / IEEE - ITBA",
        skills: ["Python", "Pandas", "Numpy", "Matplotlib"],
      },
    ],
  },
  education: {
    title: "Education",
    degreeTitle: "Nuclear Engineer",
    date: "Jul 2018",
    degreeLevel: "Master",
    rate: "8.25/10.00 (top 1%)",
    university: "Instituto Tecnológico Dan Beninson (IDB), Argentina",
    thesisDetails:
      "Deterministic analysis of the RA-10 loop in presence of a LOFA in relation with different flywheels using the thermo-hydraulic simulation software RELAP.",
    others: "Vice-President & Co-founder of the Student Center IDB",
  },
  skills: {
    title: "Skills",
    languages: ["Spanish native", "English advanced", "French beginner"],
    programming: ["C++", "JavaScript", "Python", "Matlab"],
    web: ["ReactJS", "HTML", "CSS", "SASS", "Json", "Redux"],
    dataScience: ["Pandas", "Numpy", "Matplotlib"],
    others: [
      "Git",
      "Unix",
      "Tripoli-4",
      "RELAP",
      "Autodesk - AutoCAD 2D",
      "MCNP - Los Alamos National Lab",
      "Mathcad PTC",
      "GammaVision (Gamma Spectroscopy)",
    ],
  },
};

const Portfolio = () => {
  const [check, setCheck] = useState("");

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
                <i className="bx bxs-graduation"></i>
                <h3>Education</h3>
              </li>
              <li
                onClick={() => setCheck("courses")}
                className={` ${check === "courses" && "activeButton"}`}
              >
                <i className="bx bxs-book-bookmark"></i>
                <h3>Courses</h3>
              </li>
              <li>
                <i className="bx bxs-book-open"></i>
                <h3>Skills</h3>
              </li>
              <li
                onClick={() => setCheck("experience")}
                className={` ${check === "experience" && "activeButton"}`}
              >
                <i className="bx bxs-briefcase"></i>
                <h3>Work Experience</h3>
              </li>
            </ul>
          </div>

          {check === "experience" && (
            <div className="dataContainer">
              <div className="portfolioTitle">
                <h3>Experience</h3>
              </div>
              <div className="portfolioData">
                <ul>
                  {data.experience.list.map((item, key) => (
                    <li key={key}>
                      <i className="bx bxs-diamond"></i>
                      <div>
                        <p className="title">
                          {item.name} at {item.enterprice}
                        </p>
                        <p className="date">{item.date}</p>
                        <p className="details">{item.details}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {check === "courses" && (
            <div className="dataContainer">
              <div className="portfolioTitle">
                <h3>Courses</h3>
              </div>
              <div className="portfolioData">
                <ul>
                  {data.courses.list.map((item, key) => (
                    <li key={key}>
                      <i className="bx bxs-diamond"></i>
                      <div>
                        <p className="title">{item.name}</p>
                        {item.skills.map((skill, key) => (
                          <p className="skills" key={key}>
                            {skill}
                          </p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
