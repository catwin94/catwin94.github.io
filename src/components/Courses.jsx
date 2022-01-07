import React from "react";

const Courses = (props) => {
  const { array } = props;
  return (
    <div className="dataContainer">
      <div className="dataTitle">
        <h3>Courses</h3>
      </div>
      <div className="generalData">
        <ul>
          {array.map((item, key) => (
            <li className="cardItem" key={key}>
              <i className="bx bxs-diamond"></i>
              <div>
                <p className="title">{item.name}</p>
                <div className="details">
                  <p>Content:</p>
                </div>
                {item.skills.map((skill, key) => (
                  <p className="skillTag" key={key}>
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
  );
};

export default Courses;
