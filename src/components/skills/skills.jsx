import React from 'react';
import './skills.css';

import SkillList from "../skills-list";

const skills = [
  [1, 'HTML5 & CSS3', 'icon-html', 'icon-css'],
  [2, 'Sass(Scss)', 'icon-sass'],
  [3, 'Bootstrap 4 / Materialize', 'icon-bootstrap'],
  [4, 'Gulp 4', 'icon-gulp'],
  [5, 'Babel', 'icon-babel'],
  [6, 'Webpack', 'icon-webpack'],
  [7, 'React / Redux', 'icon-react', 'icon-redux']
];


const Skills = () => {

  return (

      <div className="skills">
        <h3 className="skills__title">Technical Skills</h3>
        <SkillList skills={skills}/>
      </div>
  );
};

export default Skills;