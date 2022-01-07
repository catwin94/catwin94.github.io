import React from "react";

const Education = (props) => {
  const { array } = props;
  return (
    <div className="dataContainer">
      <div className="dataTitle">
        <h3>Education</h3>
      </div>
      <div className="generalData">
        {array.map((item) => (
          <div className="cardItem">
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
