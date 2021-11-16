import React from "react";

const WorkExperience = (props) => {
  const { array } = props;
  return (
    <div className="dataContainer">
      <div className="dataTitle">
        <h3>Experience</h3>
      </div>
      <div className="generalData">
        <ul>
          {array.map((item, key) => (
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
                      <p className="skillTag" key={key}>
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
  );
};

export default WorkExperience;
