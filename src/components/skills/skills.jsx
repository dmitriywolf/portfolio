import React from 'react';
import './skills.css';

const Skills = () => {

  return (
      <div className="skills">

        <h3 className="skills__title">Technical Skills</h3>

        <div className="skills__inner">
          <ul className="skills__list">
            <li className="skills__item">
              <p>HTML5 & CSS3</p>
              <div className="skills__icon-wrapper">
                <svg className="skills__icon" width='22px' height="22px">
                  <use xlinkHref="./img/sprite.svg#icon-html"/>
                </svg>
                <svg className="skills__icon" width='22px' height="22px">
                  <use xlinkHref="./img/sprite.svg#icon-css"/>
                </svg>
              </div>
            </li>

            <li className="skills__item">
              <p>SASS(SCSS)</p>
              <div className="skills__icon-wrapper">
                <svg className="skills__icon" width='22px' height="22px">
                  <use xlinkHref="img/sprite.svg#icon-sass"/>
                </svg>
              </div>
            </li>

            <li className="skills__item">
              <p>Bootstrap 4 / Materilize</p>
              <div className="skills__icon-wrapper">
                <svg className="skills__icon" width='22px' height="22px">
                  <use xlinkHref="img/sprite.svg#icon-bootstrap"/>
                </svg>
              </div>
            </li>
          </ul>

          <ul className="skills__list">
            <li className="skills__item">
              <p>Gulp 4</p>
              <div className="skills__icon-wrapper">
                <svg className="skills__icon" width='22px' height="22px">
                  <use xlinkHref="img/sprite.svg#icon-gulp"/>
                </svg>
              </div>
            </li>

            <li className="skills__item">
              <p>Babel</p>
              <div className="skills__icon-wrapper">
                <svg className="skills__icon" width='24px' height="24px">
                  <use xlinkHref="img/sprite.svg#icon-babel"/>
                </svg>
              </div>
            </li>

            <li className="skills__item">
              <p>Webpack</p>
              <div className="skills__icon-wrapper">
                <svg className="skills__icon" width='22px' height="22px">
                  <use xlinkHref="img/sprite.svg#icon-webpack"/>
                </svg>
              </div>
            </li>
          </ul>

          <ul className="skills__list">
            <li className="skills__item">
              <p>React/Redux</p>
              <div className="skills__icon-wrapper">
                <svg className="skills__icon" width='22px' height="22px">
                  <use xlinkHref="img/sprite.svg#icon-react"/>
                </svg>
                <svg className="skills__icon" width='22px' height="22px">
                  <use xlinkHref="img/sprite.svg#icon-redux"/>
                </svg>
              </div>
            </li>
          </ul>
        </div>




      </div>
  );
};

export default Skills;