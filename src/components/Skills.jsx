import react, { useState } from "react";
import "../assets/styles/skillsComponent.scss";
import ProgressLineList from "./ProgressLineList.jsx";
import IconsList from "./IconsList.jsx";

const SkillsComponent = (props) => {
  const [category, setCategory] = useState("");
  const { list } = props;
  return (
    <react.Fragment>
      <div className="navSkills">
        <h3
          onClick={() => setCategory("languages")}
          className={` ${category === "languages" && "activeTitle"}`}
        >
          Languages
        </h3>
        <h3
          onClick={() => setCategory("programming")}
          className={` ${category === "programming" && "activeTitle"}`}
        >
          Programming
        </h3>
        <h3
          onClick={() => setCategory("web")}
          className={` ${category === "web" && "activeTitle"}`}
        >
          Web Development
        </h3>
        <h3
          onClick={() => setCategory("dataScience")}
          className={` ${category === "dataScience" && "activeTitle"}`}
        >
          Data Science
        </h3>
        <h3
          onClick={() => setCategory("others")}
          className={` ${category === "others" && "activeTitle"}`}
        >
          Others | Softwares
        </h3>
      </div>
      <div className="iconsContainer">
        {category === "languages" && (
          <ProgressLineList array={list.languages}></ProgressLineList>
        )}
        {category === "programming" && (
          <IconsList array={list.programming}></IconsList>
        )}
        {category === "web" && <IconsList array={list.web}></IconsList>}
        {category === "dataScience" && (
          <IconsList array={list.dataScience}></IconsList>
        )}
        {category === "others" && <IconsList array={list.others}></IconsList>}
      </div>
    </react.Fragment>
  );
};
export default SkillsComponent;
