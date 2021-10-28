import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import "../assets/styles/portfolio.scss";
import "../assets/styles/home.scss";

const data = {
  experience: {
    title: "Work Experience",
    list: [
      {
        name: "Developer",
        date: "Nov 2019 - Oct 2021",
        enterprice: "CEA - France",
        logo: "./logos/CEA_logo.png",
        details:
          "Development of advanced perturbation and sensitivity methods for Monte Carlo simulations. Submitted paper at PHYSOR 2022. ",
        skills: ["C++", "Tripoli-4", "Git", "Python", "Linux"],
      },
      {
        name: "Internship",
        date: "Sep 2018 - Mar 2019",
        enterprice: "CNRS - France",
        logo: "./logos/CNRS_logo.png",
        details:
          "Fast neutron detection (10 keV up to 20 MeV) with MIMAC-FastN, a 3D nuclear recoil track detector studying nuclear reactions for neutron production: 9Be(d (1.5MeV), n) , 9Be(p (3.6 MeV),n) and 7Li (p (2.5 MeV),n).",
        skills: ["C++", "Linux"],
      },
      {
        name: "Internship",
        date: "Jan 2017 - Feb 2017",
        enterprice: "CNEA-Constituyentes - Argentina",
        logo: "./logos/CNEA_logo.png",
        details:
          "Comparison of methodologies using X-ray fluorescence in the determination of alloying and impuri-ties in Zry samples TXRF vs. WDXRF.(supervised by Dr. Luciana Cerchietti)",
        skills: [],
      },
      {
        name: "Internship",
        date: "Jan 2016 - Feb 2016",
        enterprice: "CNEA-Ezeiza - Argentina",
        logo: "./logos/CNEA_logo.png",
        details:
          "Metallographic analysis at the level of the microstructure of a Zircaloy-4 alloy, after having gonethrough three different stages of the industrial process.(supervised by Eng. Gabriel A. Juárez)",
        skills: [],
      },
      {
        name: "Internship",
        date: "Mar 2015 - Jul 2015",
        enterprice: "Universidad Tecnológica Nacional (UTN-FRGP) - Argentina",
        logo: "./logos/UTN_logo.png",
        details:
          "Analytical prediction, conditions for measurement, limits of acceptance and mitigation of vibrationsin structures originated by human activity.(supervised by Dr. Ing. Raúl D. Bertero and Ms. Eng. German Ivaldi)",
        skills: [],
      },
      {
        name: "Internship",
        date: "Jan 2015 - Feb 2015",
        enterprice: "CNEA-Bariloche - Argentina",
        logo: "./logos/CNEA_logo.png",
        details:
          "Study of tungsten alloys subjected to deformations for applications in fusion reactors.Publication on the XLII AATN.(supervised by Dr. Juana L. Gervasoni)",
        skills: ["CYPE – Metal 3D"],
      },
    ],
  },
  courses: {
    title: "Courses",
    list: [
      {
        name: "Frontend Developer / Platzi",
        logo: "./logos/platzi_logo.png",
        skills: ["HTML", "CSS", "SASS", "grid & flexbox", "responsive"],
      },
      {
        name: "Basic Javascript / Platzi",
        logo: "./logos/platzi_logo.png",
        skills: ["JavaScript"],
      },
      {
        name: "Modern Javascript Definitive Guide / Udemy",
        logo: "./logos/udemy_logo.png",
        skills: ["JavaScript", "DOM", "React", "OOP"],
      },
      {
        name: "React.js practice course / Plazi",
        logo: "./logos/platzi_logo.png",
        skills: ["ReactJS", "Route", "Redux", "React", "Hooks"],
      },
      {
        name: "Frameworks and Librearies of JavaScipt / Plazi",
        logo: "./logos/platzi_logo.png",
        skills: [
          "React functional components",
          "Styled components",
          "CSS-in-JS",
        ],
      },
      {
        name: "Python Introductory course / IEEE - ITBA",
        logo: "./logos/ITBA_logo.png",
        skills: ["Python"],
      },
      {
        name: "Data Analysis / IEEE - ITBA",
        logo: "./logos/ITBA_logo.png",
        skills: ["Python", "Pandas", "Numpy", "Matplotlib"],
      },
    ],
  },
  education: {
    title: "Education",
    list: [
      {
        logo: "./logos/IDB_logo2.png",
        degreeTitle: "Nuclear Engineer",
        date: "Aug 2015 -Jul 2018",
        degreeLevel: "Master",
        rate: "16.5 / 20 (Top 1)",
        university: "Instituto Tecnológico Dan Beninson (IDB), Argentina",
        details:
          "Thesis topic about deterministic analysis of the RA-10 loop in presence of a LOFA in relation with different flywheels using the thermo-hydraulic simulation software RELAP.",
        skills: ["Relap5"],
        others: "Vice-President & Co-founder of the Student Center IDB",
      },
      {
        logo: "./logos/UTN_logo.png",
        degreeTitle: "Civil Engineer",
        date: "Mar 2012 -Aug 2015",
        degreeLevel: "Bachelor",
        rate: "15.5 / 20",
        university: "Universidad Tecnológica Nacional (UTN – FRGP), Argentina",
        details:
          "Intern,UTN-FRGP, Buenos Aires, Argentina: Analytical prediction, conditions for measurement, limits of acceptance and mitigation of vibrationsin structures originated by human activity. (Scholarship for investigation supervised by Dr. Eng. Raúl D. Bertero)",
        skills: [""],
        others: "",
      },
    ],
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
              <li
                onClick={() => setCheck("portfolio")}
                className={` ${check === "portfolio" && "activeButton"}`}
              >
                <i className="bx bxs-briefcase-alt-2"></i>
                <h3>Portfolio</h3>
              </li>
              <li
                onClick={() => setCheck("education")}
                className={` ${check === "education" && "activeButton"}`}
              >
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
              <li
                onClick={() => setCheck("skills")}
                className={` ${check === "skills" && "activeButton"}`}
              >
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

          {check === "education" && (
            <div className="dataContainer">
              <div className="dataTitle">
                <h3>Education</h3>
              </div>
              <div className="generalData">
                {data.education.list.map((item) => (
                  <div className="dataDetailsContainer">
                    <i className="bx bxs-diamond"></i>
                    <div>
                      <div className="title">
                        <p>
                          {item.degreeTitle} at {item.university}
                        </p>
                        <div className="titleDetails">
                          <div>
                            <i className="bx bxs-calendar"></i>
                            <p>{item.date}</p>
                          </div>
                          <div>
                            <i className="bx bxs-graduation"></i>
                            <p>
                              Degree level: {item.degreeLevel} - {item.rate}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="details">
                        <p>
                          <span style={{ fontWeight: "bold" }}>Details:</span>{" "}
                          {item.details}
                        </p>
                      </div>
                      {item.skills.map(
                        (skill, key) =>
                          skill && (
                            <p className="skills" key={key}>
                              {skill}
                            </p>
                          )
                      )}
                    </div>

                    <div
                      className="logo"
                      style={{ width: "18rem", minWidth: "12rem" }}
                    >
                      <img src={item.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {check === "courses" && (
            <div className="dataContainer">
              <div className="dataTitle">
                <h3>Courses</h3>
              </div>
              <div className="generalData">
                <ul>
                  {data.courses.list.map((item, key) => (
                    <li className="dataDetailsContainer" key={key}>
                      <i className="bx bxs-diamond"></i>
                      <div>
                        <p className="title">{item.name}</p>
                        <div className="details">
                          <p>Details:</p>
                        </div>
                        {item.skills.map((skill, key) => (
                          <p className="skills" key={key}>
                            {skill}
                          </p>
                        ))}
                      </div>
                      <div className="logo">
                        <img src={item.logo} alt="" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {check === "experience" && (
            <div className="dataContainer">
              <div className="dataTitle">
                <h3>Experience</h3>
              </div>
              <div className="generalData">
                <ul>
                  {data.experience.list.map((item, key) => (
                    <li className="dataDetailsContainer" key={key}>
                      <i className="bx bxs-diamond"></i>
                      <div>
                        <div className="title">
                          <p>
                            {item.name} at {item.enterprice}
                          </p>
                          <div className="titleDetails">
                            <i className="bx bxs-calendar"></i>
                            <p>{item.date}</p>
                          </div>
                        </div>

                        <div className="details">
                          <p>{item.details}</p>
                        </div>

                        {item.skills.map(
                          (skill, key) =>
                            skill && (
                              <p className="skills" key={key}>
                                {skill}
                              </p>
                            )
                        )}
                      </div>
                      <div className="logo">
                        <img src={item.logo} alt="" />
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
