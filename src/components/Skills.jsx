import react, { useState } from "react";
import "../assets/styles/skillsComponent.scss";
import ProgressLineList from "./ProgressLineList.jsx";
import IconsList from "./IconsList.jsx";
import { useSelector } from "react-redux";

const SkillsComponent = () => {
  const [category, setCategory] = useState("languages");
  const skillsData = useSelector((state) => state.data.skills);

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
      <div>
        {category === "languages" && (
          <ProgressLineList array={skillsData.languages}></ProgressLineList>
        )}
        {category === "programming" && (
          <IconsList array={skillsData.programming}></IconsList>
        )}
        {category === "web" && <IconsList array={skillsData.web}></IconsList>}
        {category === "dataScience" && (
          <IconsList array={skillsData.dataScience}></IconsList>
        )}
        {category === "others" && (
          <IconsList array={skillsData.others}></IconsList>
        )}
      </div>
    </react.Fragment>
  );
};
export default SkillsComponent;
