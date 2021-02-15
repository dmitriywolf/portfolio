import React from 'react';

import './app-title.css';

const AppTitle = () => {


  return (
      <div>
        <h1 className="intro__title">Hello, I'm <span className="green-text">Dmitriy</span></h1>
        <h2 className="intro__subtitle"><span className="brown-text">Welcome</span> to my portfolio page
          <span className="brown-text">:)</span></h2>
      </div>
  )
};

export default AppTitle;