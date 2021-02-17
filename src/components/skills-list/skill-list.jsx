import React from 'react';
import SkillItem from "../skills-item";

const skills = [
  [1, 'HTML5 & CSS3', 'icon-html', 'icon-css'],

  [2, 'Sass(Scss)', 'icon-sass'],
  [3, 'Bootstrap 4 / Materialize', 'icon-bootstrap'],
  [4, 'Gulp 4', 'icon-gulp'],
  [5, 'Babel', 'icon-babel'],
  [6, 'Webpack', 'icon-webpack'],
  [7, 'React / Redux', 'icon-react', 'icon-redux']
];


const SkillList = () => {


  const elements = skills.map((item) => {

    const [id, title, ...iconTitle] = item;

    const svgIcons = iconTitle.map((item, index) => {



      return (
          <svg className="skills__icon" width='22px' height="22px" key={index}>
            <use xlinkHref={`./img/sprite.svg#${item}`}/>
          </svg>
      )
    });

    return (
        <li className="skills__item" key={id}>
          <p>{title}</p>
          <div className="skills__icon-wrapper" key={id}>
            {svgIcons}
          </div>
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