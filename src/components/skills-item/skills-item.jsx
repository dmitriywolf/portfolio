import React from 'react';
import './skills-item.css';


const SkillsItem = ({title, icons}) => {


  const svgIcons = icons.map((item, index) => {
    return (
        <svg className="skills__icon" width='22px' height="22px" key={index}>
          <use xlinkHref={`./img/sprite.svg#${item}`}/>
        </svg>
    )
  });


  return (
      <>
        <p>{title}</p>
        <div className="skills__icon-wrapper">
          {svgIcons}
        </div>
      </>
  )
};

export default SkillsItem;
