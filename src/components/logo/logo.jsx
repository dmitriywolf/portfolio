import React from 'react';
import './logo.css';

const Logo = () => {
  return (
      <div className="logo">
        <svg className="logo__img" width="50" height="50">
          <use xlinkHref="./img/sprite.svg#icon-logo"/>
        </svg>
        <p className="logo__text">Dmitriy.Dev</p>
      </div>
  )
};

export default Logo;
