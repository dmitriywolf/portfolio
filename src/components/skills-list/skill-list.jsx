import React from 'react';
import SkillItem from "../skills-item";
import './skill-list.css';

const SkillList = ({skills}) => {

  const elements = skills.map((item) => {
    const [id, title, ...iconTitles] = item;
    return (
        <li className="skills__item" key={id}>
          <SkillItem title={title} icons={iconTitles}/>
        </li>
    );
  });

  return (
      <ul className="skills__list">
        {elements}
      </ul>
  );
};

export default SkillList;
