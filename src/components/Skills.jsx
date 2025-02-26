import React from "react";
import "./styles/skills.css";

const Skills = () => {
  return (
    <div className="wrapper">
      <div className="item item1">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="JavaScript"
        />
      </div>
      <div className="item item2">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="React"
        />
      </div>
      <div className="item item3">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
          alt="Redux"
        />
      </div>
      <div className="item item4">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          alt="Python"
        />
      </div>
      <div className="item item5">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
          alt="Pandas"
        />
      </div>
      <div className="item item6">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
          alt="Matplotlib"
        />
      </div>
      <div className="item item7">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
      </div>
      <div className="item item8">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          alt="CSS3"
        />
      </div>
    </div>
  );
};

export default Skills;
