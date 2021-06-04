import React, {Component} from 'react';
import './works.css';
import WorksFilter from '../works-filter';
import Work from '../work';

import srcAdvogrand from './img/advogrand.jpg';
import srcBelaz from './img/belaz.jpg';
import srcContinent from './img/continent.jpg';
import srcYoga from './img/yoga.jpg';
import srcCourses from './img/courses.jpg';
import srcBouncy from './img/bouncy.jpg';
import srcDegree from './img/degree.jpg';
import srcHouses from './img/houses.jpg';
import srcTodoApp from './img/todoapp.jpg';


export default class Works extends Component {
  startIdWorks = 1000;

  state = {
    works: [
      {
        id: this.startIdWorks++,
        title: "Mining Courses",
        desc: "Web site",
        stack: ["Sass", "JS", "Gulp"],
        srcImg: srcCourses,
        link: "https://dmitriywolf.github.io/courses/dist/",
        filterT: "other",
      },
      {
        id: this.startIdWorks++,
        title: "Todo app",
        desc: "Single Page",
        stack: ["Bootstrap", "React"],
        srcImg: srcTodoApp,
        link: "https://dmitriywolf.github.io/todoapp/dist/",
        filterT: "sp",
      },
      {
        id: this.startIdWorks++,
        title: "Yoga",
        desc: "Landing Page",
        stack: ["Sass", "JS", "Gulp", "Babel/Webpack", "Bootstrap"],
        srcImg: srcYoga,
        link: "https://dmitriywolf.github.io/yoga/dist/",
        filterT: "lp",
      },
      {
        id: this.startIdWorks++,
        title: "Seven Continents",
        desc: "Landing Page",
        stack: ["Sass", "JS", "Gulp", "Babel/Webpack", "Bootstrap"],
        srcImg: srcContinent,
        link: "https://dmitriywolf.github.io/continent/dist/",
        filterT: "lp",
      },
      {
        id: this.startIdWorks++,
        title: "Advogrand",
        desc: "Landing Page",
        stack: ["Sass", "JS", "Gulp", "Babel/Webpack"],
        srcImg: srcAdvogrand,
        link: "https://dmitriywolf.github.io/advogrand/dist/",
        filterT: "lp",
      },
      {
        id: this.startIdWorks++,
        title: "Дома на века",
        desc: "Landing Page",
        stack: ["Sass", "jQuery", "Gulp"],
        srcImg: srcHouses,
        link: "https://dmitriywolf.github.io/houses/dist/",
        filterT: "lp",
      },
      {
        id: this.startIdWorks++,
        title: "23 Degree",
        desc: "Landing Page",
        stack: ["Sass", "JS", "Gulp",],
        srcImg: srcDegree,
        link: "https://dmitriywolf.github.io/degree/dist/",
        filterT: "lp",
      },
      {
        id: this.startIdWorks++,
        title: "Eddie's car",
        desc: "Landing Page",
        stack: ["jQuery"],
        srcImg: srcBelaz,
        link: "https://dmitriywolf.github.io/belaz/dist/",
        filterT: "lp",
      },
      {
        id: this.startIdWorks++,
        title: "Bouncy",
        desc: "Landing Page",
        stack: ["jQuery", "Gulp"],
        srcImg: srcBouncy,
        link: "https://dmitriywolf.github.io/bouncy/dist/",
        filterT: "lp",
      },
    ],
    filter: "all" // all, lp, sp, other
  };

  filterWorks(elements, filter) {
    switch (filter) {
      case "all":
        return elements;
      case "lp":
        return elements.filter((work) => (work.filterT === "lp"));
      case "sp":
        return elements.filter((work) => (work.filterT === "sp"));
      case "other":
        return elements.filter((work) => (work.filterT === "other"));
      default:
        return elements;
    }
  }

  onFilter = (filter) => {
    this.setState({filter: filter})
  };


  render() {

    let {works, filter} = this.state;

    const visibleItems = this.filterWorks(works, filter);

    const items = visibleItems.map(work => {
      const {id, ...workProps} = work;
      return (
          <Work key={id} {...workProps}/>
      )
    });

    return (
        <div className="works__wrapper" id="works">
          <WorksFilter filter={filter} onFilter={this.onFilter}/>
          <div className="container">
            <div className="works">
              {items}
            </div>
          </div>
        </div>
    )
  }

}


