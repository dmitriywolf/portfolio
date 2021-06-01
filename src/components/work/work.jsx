import React from 'react';
import './work.css';

const Work = (props) => {


  return (
      <>
        <div className="work">
          <img className="work__img" src={props.src} alt="Any alt"/>

          <div className="work__content">
            <h3 className="work__title">Any title</h3>
            <p className="work__desc">Any subtitle</p>

            <div className="work__button-wrapper">

              <a className="work__button" href="https://dmitriywolf.github.io/courses/dist/" target="_blank">
                <svg className="work__button-img" width="14" height="14">
                  <use xlinkHref="img/sprite.svg#icon-web"/>
                </svg>
                <span className="work__button-text">Go to Site</span>
              </a>
            </div>
          </div>

        </div>
      </>
  )
};

export default Work;
