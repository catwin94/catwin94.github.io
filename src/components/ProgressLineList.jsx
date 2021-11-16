import React from "react";
import "../assets/styles/progressLine.scss";

const ProgressLineList = (props) => {
  const { array } = props;
  return (
    <div className="textListContainer">
      {array.map((item, key) => (
        <div key={key} className="textListItem">
          <h3>{item.title}</h3>
          <div className="progress-line">
            <span style={{ width: `${item.level}` }}></span>{" "}
          </div>
        </div>
      ))}

      {/* <div className="module-border-wrap">
        <div className="module">Otro tipo de recuadro</div>
      </div> */}
    </div>
  );
};

export default ProgressLineList;
