import React from 'react';
import './arrow.css';

const Arrow = () => {


  return (

      <button className="arrow">
        <svg className="arrow__icon">
          <use xlinkHref="img/sprite.svg#icon-arrow"/>
        </svg>
      </button>
  )
};

export default Arrow;
