import React from 'react';
import "./intro.css";

import AppTitle from "../app-title";
import Arrow from "../arrow";

const Intro = () => {
  return (
      <section className="intro">
        <div className="intro__inner">
          <AppTitle/>
        </div>
        <Arrow/>
      </section>
  )
};

export default Intro;

