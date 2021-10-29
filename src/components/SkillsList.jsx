import React from "react";
import "../assets/styles/skillsList.scss";

const SkillsList = (props) => {
  const { array, show } = props;
  return (
    <ul className={`subList ${show ? "active" : ""}`}>
      {array.map((item, key) => (
        <li key={key} className={`item_sublist icono_texto `}>
          <i className=" icon_sublist bx bx-plus"></i>
          <h3>{item}</h3>
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
