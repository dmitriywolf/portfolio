import React, {Component} from 'react';
import './works.css';
import Work from '../work';

import srcAdvogrand from './img/advogrand.jpg';
import srcBelaz from './img/belaz.jpg';
import srcContinent from './img/continent.jpg';
import srcYoga from './img/yoga.jpg';
import srcCourses from './img/courses.jpg';
import srcBouncy from './img/bouncy.jpg';
import srcDegree from './img/degree.jpg';
import srcHouses from './img/houses.jpg';
import srcGranit from './img/granit.jpg';
import srcIrvas from './img/irvas.jpg';
import srcTodo from './img/todo.jpg';
import srcShopno from './img/shopno.jpg';

export default class Works extends Component {

  render() {
    return (
        <>
          <div className="works__wrapper">
            <div className="container">

              <div className="works">
                <Work src={srcAdvogrand}/>
                <Work src={srcBelaz}/>
                <Work src={srcContinent}/>
                <Work src={srcYoga}/>
                <Work src={srcCourses}/>
                <Work src={srcHouses}/>
                <Work src={srcDegree}/>
                <Work src={srcBouncy}/>
                <Work src={srcGranit}/>
                <Work src={srcIrvas}/>
                <Work src={srcTodo}/>
                <Work src={srcShopno}/>
              </div>
            </div>
          </div>
        </>
    )
  }
}

