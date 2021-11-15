import React from "react";
import "../assets/styles/iconsContainer.scss";

const IconsComponent = () => {
  return (
    <div className="skillsIcons">
      <div className="icon_logo">
        <img src=".\logos\programming\html_logo.png" alt="" />
        <p>HTML 5</p>
      </div>
      <div className="icon_logo">
        <img src=".\logos\programming\CSS3_logo.png" alt="" />
        <p>CSS 3</p>
      </div>
      <div className="icon_logo">
        <img src=".\logos\programming\javascript_logo.png" alt="" />
        <p>JavaScript</p>
      </div>
      <div className="icon_logo">
        <img src=".\logos\programming\react_logo.png" alt="" />
        <p>React JS</p>
      </div>
      <div className="icon_logo">
        <img src=".\logos\programming\sass_logo.png" alt="" />
        <p>SASS</p>
      </div>
      <div className="icon_logo">
        <img src=".\logos\programming\redux_logo.png" alt="" />
        <p>Redux</p>
      </div>
    </div>
  );
};

export default IconsComponent;
