import React from 'react';
import "./intro.css";

import AppTitle from "../app-title";
import Contacts from '../contacts';
import Arrow from "../arrow";

import srcIntroImg from './intro.jpg';

const Intro = () => {
  return (
      <section className="intro">
        <div className="container">
          <div className="intro__inner">

            <div className="intro__img-wrap">
              <img src={srcIntroImg} alt={"Intro"}/>
            </div>

            <div className="intro__content-wrap">
              <AppTitle/>
              <Contacts/>
            </div>

          </div>
          <Arrow/>

        </div>
      </section>
  )
};

export default Intro;

