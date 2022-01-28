import React from "react";
import { useSelector } from "react-redux";

const Education = () => {
  const educationData = useSelector((state) => state.data.education.list);

  return (
    <div className="dataContainer">
      <div className="dataTitle">
        <h3>Education</h3>
      </div>
      <div className="generalData">
        {educationData.map((item, key) => (
          <div className="cardItem" key={key}>
            <i className="bx bxs-diamond"></i>
            <div>
              <div className="title" style={{ display: "flex" }}>
                <div>
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

                <div
                  className="logo"
                  style={{ width: "19rem", minWidth: "12rem" }}
                >
                  {/* <div className="logo"> */}
                  <img src={item.logo} alt="" />
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
                    <p className="skillTag" key={key}>
                      {skill}
                    </p>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
