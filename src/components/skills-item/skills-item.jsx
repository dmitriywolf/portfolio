import React from 'react';
import './skills-item.css';




const SkillsItem = ( {title, iconTitle} ) => {


  return (
      <li className="skills__item">
        <p>{title}</p>

        <div className="skills__icon-wrapper">

          <svg className="skills__icon">
            <use xlinkHref={`./img/sprite.svg#${iconTitle}`}/>
          </svg>

        </div>
      </li>
  )
};

export default SkillsItem;