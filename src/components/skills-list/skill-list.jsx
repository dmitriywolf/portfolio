import React from 'react';
import SkillItem from "../skills-item";
import './skill-list.css';

const SkillList = ({skills}) => {

  const elements = skills.map((item) => {
    const [id, title, ...iconTitle] = item;
    return (
        <li className="skills__item" key={id}>
          <SkillItem title={title} icons={iconTitle}/>
        </li>
    );
  });

  return (
      <ul>
        {elements}
      </ul>
  );
};

export default SkillList;