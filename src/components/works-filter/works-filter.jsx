import React from 'react';
import './works-filter.css';


const WorksFilter = () => {
  return (
      <div className="filter__wrapper">
        <div className="container">

          <h3 className="filter__title">Works</h3>

          <div className="filter">

            <div className="filter__buttons filter__buttons--type">
              <button className="filter__btn active">All</button>
              <button className="filter__btn">Landing Page</button>
              <button className="filter__btn">SPA</button>
              <button className="filter__btn">Other</button>
            </div>

            <div className="filter__buttons filter__buttons--stack">
              <button className="filter__btn">Sass(SCSS)</button>
              <button className="filter__btn">Bootstrap/Materialize</button>
              <button className="filter__btn">jQuery</button>
              <button className="filter__btn">React</button>
            </div>
          </div>

        </div>
      </div>


  )
};


export default WorksFilter;
