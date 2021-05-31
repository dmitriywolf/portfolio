import React from 'react';
import './works-filter.css';


const WorksFilter = () => {
  return (

      <>
        <div className="filter-wrapper">

          <div className="filter-buttons filter-buttons--type">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Landing Page</button>
            <button className="filter-btn">SPA</button>
            <button className="filter-btn">Other</button>
          </div>

          <div className="filter-buttons filter-buttons--stack">
            <button className="filter-btn">Sass(SCSS)</button>
            <button className="filter-btn">Bootstrap/Materialize</button>
            <button className="filter-btn">jQuery</button>
            <button className="filter-btn">React</button>
          </div>
        </div>


      </>


  )
};


export default WorksFilter;
