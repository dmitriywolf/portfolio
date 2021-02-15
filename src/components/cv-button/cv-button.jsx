import React from 'react';
import './cv-button.css';

const CVButton = () => {
  return (
      <div className="resume__download download">
        <a className="download__button" href="" download>
          <span className="download__text">Download Resume</span>
          <svg className="download__icon" width="15" height="15">
            <use xlinkHref="img/sprite.svg#icon-download"/>
          </svg>
        </a>
      </div>
  )
};

export default CVButton;