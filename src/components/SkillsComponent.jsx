import react, { useState } from "react";
import IconsComponent from "./IconsContainer.jsx";
import SkillsList from "./SkillsList.jsx";
import "../assets/styles/skillsList.scss";

const SkillsComponent = (props) => {
  const [category, setCategory] = useState("");
  const { list } = props;
  return (
    <react.Fragment>
      <div className="skillsContainer">
        <div className="skillsMenu">
          <ul className="mainList">
            <li>
              <div className="icono_texto">
                <i className="bx bxl-sketch"></i>
                <h2 onClick={() => setCategory("languages")}>Languages</h2>
              </div>
              {category === "languages" && (
                <i className="bx bxs-chevron-right"></i>
              )}
              <SkillsList
                array={list.languages}
                show={category === "languages" ? true : false}
              />
            </li>

            <li>
              <div className="icono_texto">
                <i className="bx bxl-sketch"></i>
                <h2 onClick={() => setCategory("programming")}>Programming</h2>
              </div>
              {category === "programming" && (
                <i className="bx bxs-chevron-right"></i>
              )}
              <SkillsList
                array={list.programming}
                show={category === "programming" ? true : false}
              />
            </li>

            <li>
              <div className="icono_texto">
                <i className="bx bxl-sketch"></i>
                <h2 onClick={() => setCategory("web")}>Web</h2>
              </div>

              {category === "web" && <i className="bx bxs-chevron-right"></i>}

              <SkillsList
                array={list.web.list}
                show={category === "web" ? true : false}
              />
            </li>

            <li>
              <div className="icono_texto">
                <i className="bx bxl-sketch"></i>
                <h2 onClick={() => setCategory("dataScience")}>Data Science</h2>
              </div>
              {category === "dataScience" && (
                <i className="bx bxs-chevron-right"></i>
              )}

              <SkillsList
                array={list.dataScience}
                show={category === "dataScience" ? true : false}
              />
            </li>

            <li>
              <div className="icono_texto">
                <i className="bx bxl-sketch"></i>
                <h2 onClick={() => setCategory("others")}>Others</h2>
              </div>
              {category === "others" && (
                <i className="bx bxs-chevron-right"></i>
              )}
              <SkillsList
                array={list.others}
                show={category === "others" ? true : false}
              />
            </li>
          </ul>
        </div>
      </div>
      <IconsComponent></IconsComponent>
    </react.Fragment>
  );
};

export default SkillsComponent;
