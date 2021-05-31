import React from 'react';
import './arrow.css';


const Arrow = () => {
  return (
      <button className="arrow" data-scroll="#resume">
        <svg width="30px" height="30px">
          <use xlinkHref={`./img/sprite.svg#icon-arrow`}/>
        </svg>
      </button>
  )
};

export default Arrow;





