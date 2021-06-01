import React, {Component} from 'react';
import './works.css';
import WorksFilter from '../works-filter';

import Work from '../work/';


export default class Works extends Component{



  render() {
    return (
        <>
          <div className="container">
            <h2 className="works__title">Works</h2>

            <WorksFilter/>

            <ul className="works__list">
              <Work/>
            </ul>
          </div>




          {/*<div className="works__inner">*/}
          {/*  <ul className="works__list">*/}





        </>
    )



  }
}

