import React from 'react';
import './cv-button.css';

const CVButton = () => {
  return (
      <div>
        <a className="cv-button" href="" download>
          <span className="cv-button__text">Download Resume</span>
          <svg className="cv-button__icon" width="15" height="15">
            <use xlinkHref="img/sprite.svg#icon-download"/>
          </svg>
        </a>
      </div>
  )
};

export default CVButton;