import React from 'react';
import './work.css';


const Work = () => {

  return (
      <>
        <img className="works__item-img" src='img/courses.jpg' alt="Mining Courses"/>
        <div className="works__item-content">
          <h3 className="work__title">Mining Courses</h3>
          <div className="work__technology">
            <span>SPA</span>
          </div>
          <div className="work__button-wrapper">
            <a className="work__button" href="https://dmitriywolf.github.io/courses/dist/"
               target="_blank">
              <svg className="work__img" width="14" height="14">
                <use xlinkHref="img/sprite.svg#icon-web"/>
              </svg>
              Go to Site</a>
          </div>
        </div>
      </>
  )

};

export default Work;
