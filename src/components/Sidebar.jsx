import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/sidebar.scss";
import cvPdf from "../assets/others/Resume_Catalina.pdf";

const Sidebar = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className={`sidebarContent ${sideBar && "active"}`}>
      <div className={`sidebar ${sideBar && "active"}`}>
        <div className="logo_content">
          <div className="logo">
            <div className="logo_name">Catalina CARABAJAL</div>
          </div>
          <i
            className="bx bx-menu"
            id="btn"
            onClick={() => {
              setSideBar((prevstate) => !prevstate);
            }}
          />
        </div>
        <ul className="nav_list">
          <li>
            <Link to="/">
              <i class="bx bx-home-alt"></i>
              <span className="links_name">Home</span>
            </Link>
            <span className="tooltip">Home</span>
          </li>
          <li>
            <a href="/">
              <i class="bx bxs-folder-open"></i>
              <span className="links_name">Portfolio</span>
            </a>
            <span className="tooltip">Portfolio</span>
          </li>
          <li>
            <a href={cvPdf} target="_blank">
              <i class="bx bx-file-blank"></i>
              <span className="links_name">CV</span>
            </a>
            <span className="tooltip">CV</span>
          </li>
          <li>
            <a href="/">
              <i class="bx bx-history"></i>
              <span className="links_name">Time Line</span>
            </a>
            <span className="tooltip">Time Line</span>
          </li>
          <li>
            <Link to="/contactMe">
              <i class="bx bxs-user"></i>
              <span className="links_name">Contact me</span>
            </Link>
            <span className="tooltip">Contact me</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
