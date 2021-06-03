import React from 'react';
import './arrow.css';

const Arrow = () => {
  return (
      <a className="arrow" href={"#skills"}>
        <svg className="arrow__icon">
          <use xlinkHref="./img/sprite.svg#icon-arrow"/>
        </svg>
      </a>
  )
};

export default Arrow;
