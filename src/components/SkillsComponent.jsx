import react, { useState } from "react";
import IconsComponent from "./IconsComponent.jsx";
import "../assets/styles/skillsComponent.scss";
import TextListComponent from "./TextListComponent.jsx";

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
          <TextListComponent array={list.languages}></TextListComponent>
        )}
        {category === "programming" && (
          <IconsComponent array={list.programming}></IconsComponent>
        )}
        {category === "web" && (
          <IconsComponent array={list.web}></IconsComponent>
        )}
        {category === "dataScience" && (
          <IconsComponent array={list.dataScience}></IconsComponent>
        )}
        {category === "others" && (
          <IconsComponent array={list.others}></IconsComponent>
        )}
      </div>
    </react.Fragment>
  );
};
export default SkillsComponent;
