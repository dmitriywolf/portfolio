import React from 'react';
import './skills.css';

import SkillList from "../skills-list";

const skills = [
  [1, 'HTML5 & CSS3', 'icon-html', 'icon-css'],
  [2, 'Sass(Scss)', 'icon-sass'],
  [3, 'Bootstrap', 'icon-bootstrap'],
  [4, 'Materialize', 'icon-materialize'],
  [5, 'Gulp', 'icon-gulp'],
  [6, 'Babel', 'icon-babel'],
  [7, 'Webpack', 'icon-webpack'],
  [8, 'Git/GitHub', 'icon-git', 'icon-github'],
  [9, 'JavaScript', 'icon-js'],
  [10, 'React', 'icon-react']
];


const Skills = () => {
  return (
      <div className="skills" id="skills">
        <div className="container">
          <h3 className="skills__title">Skills / Experience</h3>
          <SkillList skills={skills}/>
        </div>
      </div>
  )
};


export default Skills;
