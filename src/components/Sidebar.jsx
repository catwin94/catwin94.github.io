import React, { useState } from "react";
import "../assets/styles/sidebar.scss";

const Sidebar = (props) => {
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
            <a href="/">
              <i class="bx bxs-folder-open"></i>
              <span className="links_name">Portfolio</span>
            </a>
            <span className="tooltip">Portfolio</span>
          </li>
          <li>
            <a href="/">
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
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
