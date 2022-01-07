import React from "react";
import "../assets/styles/iconsList.scss";

const IconsList = (props) => {
  const { array } = props;

  return (
    <div className="skillsIcons">
      {array.map((item, key) => (
        <div key={key} className="icon_logo">
          <img src={item.image} alt="" />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default IconsList;
