import React from 'react';
import './works-filter.css';


const WorksFilter = () => {
  return (
      <div className="filter__wrapper">
        <div className="container">
          <h3 className="filter__title">Works</h3>

          <div className="filter">
            <div className="filter__buttons">
              <button className="filter__btn _active">All</button>
              <button className="filter__btn">Landing Page</button>
              <button className="filter__btn">SPA</button>
              <button className="filter__btn">Other</button>
            </div>
          </div>
        </div>
      </div>


  )
};


export default WorksFilter;
