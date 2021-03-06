import React from "react";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const portfolioData = useSelector((state) => state.data.portfolio.list);

  return (
    <div className="dataContainer">
      <div className="dataTitle">
        <h3>Portfolio</h3>
      </div>
      <div className="generalData">
        {portfolioData.map((item, key) => (
          <div className="cardItem" style={{ flexWrap: "wrap" }} key={key}>
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
              <iframe
                id="inlineFrameExample"
                title="Inline Frame Example"
                width="100%"
                height="100%"
                src={item.url}
              ></iframe>
              {/* <img src={item.image} alt="" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
