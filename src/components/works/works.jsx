import React from 'react';
import './works.css';


import src1 from './img/courses.jpg';
import src2 from './img/advogrand.jpg';
import src3 from './img/yoga.jpg';
import src4 from './img/continent.jpg';
import src5 from './img/houses.jpg';
import src6 from './img/belaz.jpg';
import src7 from './img/degree.jpg';
import src8 from './img/bouncy.jpg';

const Works = () => {
  return (
      <div className="works__wrapper">
        <ul className="works__list">

          <li className="works__item work">
            <img className="works__item-img" src={src1} alt="Mining Courses"/>
            <div className="works__item-content">
              <h3 className="work__title">Mining Courses</h3>
              <div className="work__technology">
                <span>SPA</span>
              </div>

              <div className="work__button-wrapper">
                <a className="work__button" href="https://calm-fortress-08818.herokuapp.com/"
                   target="_blank">
                  <svg className="work__img" width="14" height="14">
                    <use xlinkHref="img/sprite.svg#icon-web"/>
                  </svg>
                  Go to Site</a>
                <a className="work__button" href="https://github.com/dmitriywolf/courses"
                   target="_blank">
                  <svg className="work__img" width="14" height="14">
                    <use xlinkHref="img/sprite.svg#icon-github"/>
                  </svg>
                  GitHub</a>
              </div>

            </div>

          </li>


          <li className="works__item work">
            <img className="works__item-img" src={src2} alt="Advogrand"/>
            <div className="works__item-content">
              <h3 className="work__title">Advogrand</h3>
              <div className="work__technology">
                <span>Landing Page</span>
              </div>
              <div className="work__button-wrapper">
                <a className="work__button" href="https://dmitriywolf.github.io/landingpages/advogrand"
                   target="_blank">
                  <svg className="work__img" width="14" height="14">
                    <use xlinkHref="img/sprite.svg#icon-web"/>
                  </svg>
                  Go to Site</a>
              </div>

            </div>

          </li>


          <li className="works__item work">
            <img className="works__item-img" src={src3} alt="Yoga"/>
            <div className="works__item-content">
              <h3 className="work__title">Yoga</h3>
              <div className="work__technology">
                <span>Landing Page</span>
              </div>

              <div className="work__button-wrapper">
                <a className="work__button" href="https://dmitriywolf.github.io/landingpages/yoga"
                   target="_blank">
                  <svg className="work__img" width="14" height="14">
                    <use xlinkHref="img/sprite.svg#icon-web"/>
                  </svg>
                  Go to Site</a>
              </div>

            </div>

          </li>

          <li className="works__item work">
            <img className="works__item-img" src={src4} alt="Seven Continents"/>
            <div className="works__item-content">
              <h3 className="work__title">Seven Continents</h3>
              <div className="work__technology">
                <span>Landing Page </span>
              </div>

              <div className="work__button-wrapper">
                <a className="work__button" href="https://dmitriywolf.github.io/landingpages/continent"
                   target="_blank">
                  <svg className="work__img" width="14" height="14">
                    <use xlinkHref="img/sprite.svg#icon-web"/>
                  </svg>
                  Go to Site</a>
              </div>

            </div>
          </li>


          <li className="works__item work">
            <img className="works__item-img" src={src5} alt="Дома на века"/>
            <div className="works__item-content">
              <h3 className="work__title">Houses</h3>
              <div className="work__technology">
                <span>Landing Page</span>
              </div>

              <div className="work__button-wrapper">
                <a className="work__button" href="https://dmitriywolf.github.io/landingpages/houses"
                   target="_blank">
                  <svg className="work__img" width="14" height="14">
                    <use xlinkHref="img/sprite.svg#icon-web"/>
                  </svg>
                  Go to Site</a>
              </div>

            </div>
          </li>


          <li className="works__item work">
            <img className="works__item-img" src={src6} alt="Belaz"/>
            <div className="works__item-content">
              <h3 className="work__title">Eddie's Car</h3>
              <div className="work__technology">
                <span>Landing Page</span>
              </div>

              <div className="work__button-wrapper">
                <a className="work__button" href="https://dmitriywolf.github.io/landingpages/belaz"
                   target="_blank">
                  <svg className="work__img" width="14" height="14">
                    <use xlinkHref="img/sprite.svg#icon-web"/>
                  </svg>
                  Go to Site</a>
              </div>

            </div>
          </li>


          <li className="works__item work">
            <img className="works__item-img" src={src7} alt="Degree"/>
            <div className="works__item-content">
              <h3 className="work__title">23 Degree</h3>
              <div className="work__technology">
                <span>Landing Page</span>
              </div>

              <div className="work__button-wrapper">
                <a className="work__button" href="https://dmitriywolf.github.io/landingpages/degree"
                   target="_blank">
                  <svg className="work__img" width="14" height="14">
                    <use xlinkHref="img/sprite.svg#icon-web"/>
                  </svg>
                  Go to Site</a>
              </div>

            </div>
          </li>

          <li className="works__item work">
            <img className="works__item-img" src={src8} alt="Bouncy"/>
            <div className="works__item-content">
              <h3 className="work__title">Bouncy Code Cafe</h3>
              <div className="work__technology">
                <span>Landing Page</span>
              </div>

              <div className="work__button-wrapper">
                <a className="work__button" href="https://dmitriywolf.github.io/landingpages/bouncy"
                   target="_blank">
                  <svg className="work__img" width="14" height="14">
                    <use xlinkHref="img/sprite.svg#icon-web"/>
                  </svg>
                  Go to Site</a>
              </div>

            </div>
          </li>


        </ul>

      </div>
  )
};

export default Works;