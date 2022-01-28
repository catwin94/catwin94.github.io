import React from "react";

export default function BackgroundNavBar(props) {
  const { check, setCheck } = props;
  return (
    <div className="navBarBackground">
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
  );
}
