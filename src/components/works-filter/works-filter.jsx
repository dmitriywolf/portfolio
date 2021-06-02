import React from 'react';
import './works-filter.css';


const WorksFilter = () => {
  return (
      <div className="filter__wrapper">
        <div className="container">

          <h3 className="filter__title">Works</h3>

          <div className="filter">

            <div className="filter__buttons filter__buttons--type">
              <button className="filter__btn filter__btn--type _active">All</button>
              <button className="filter__btn filter__btn--type">Landing Page</button>
              <button className="filter__btn filter__btn--type">SPA</button>
              <button className="filter__btn filter__btn--type">Other</button>
            </div>

            <div className="filter__buttons filter__buttons--stack">
              <button className="filter__btn filter__btn--stack _active">Sass(SCSS)</button>
              <button className="filter__btn filter__btn--stack">Bootstrap/Materialize</button>
              <button className="filter__btn filter__btn--stack">jQuery</button>
              <button className="filter__btn filter__btn--stack">React</button>
            </div>
          </div>

        </div>
      </div>


  )
};


export default WorksFilter;
