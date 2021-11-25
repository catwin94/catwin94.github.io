import React from "react";

const Portfolio = (props) => {
  const { list } = props;
  return (
    <div className="dataContainer">
      <div className="dataTitle">
        <h3>Portfolio</h3>
      </div>
      <div className="generalData">
        {list.map((item, key) => (
          <div className="cardItem" key={key}>
            <i className="bx bxs-diamond"></i>
            <div>
              <div className="title">
                {item.title}
                <div
                  className="titleDetails"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <a href={item.gitHub} target="_blank" rel="noreferrer">
                    <i className="bx bxl-github"></i>
                    <p>{item.gitHub}</p>
                  </a>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <i className="bx bx-world"></i>
                    <p>{item.url}</p>
                  </a>
                </div>
              </div>
              <div className="details">This project was performed with:</div>
              <div className="skillsTagContainer">
                {item.skills.map((skill, key) => (
                  <p className="skillTag" key={key}>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
            <div className="imgProject">
              <img src={item.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
