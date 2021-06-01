import React from 'react';
import "./intro.css";


import AppTitle from "../app-title";
import Contacts from '../contacts';
import Arrow from "../arrow";

import src from './intro.jpg';

const Intro = () => {
  return (
      <section className="intro">
        <div className="container">
          <div className="intro__inner">
            <div className="intro__img-wrap">
              <img src={src} alt={"Intro"}/>
            </div>

            <div className="intro__text">
              <AppTitle/>
              <Contacts/>
            </div>

          </div>

        </div>
      </section>
  )
};

export default Intro;

