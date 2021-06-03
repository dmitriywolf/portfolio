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
import srcGranit from './img/granit.jpg';
import srcIrvas from './img/irvas.jpg';
import srcTodoApp from './img/todoapp.jpg';
import srcShopno from './img/shopno.jpg';

export default class Works extends Component {
  startIdWorks = 1000;

  state = {
    works: [
      {
        id: this.startIdWorks++,
        filterT: "lp",
        title: "Advogrand",
        desc: "Landing Page",
        stack: ["Sass", "Bootstrap", "Gulp"],
        srcImg: srcAdvogrand,
        link: "https://dmitriywolf.github.io/advogrand/dist/",
      },
      {
        id: this.startIdWorks++,
        filterT: "lp",
        title: "Eddie's car",
        desc: "Landing Page",
        stack: ["Sass", "Bootstrap", "Gulp"],
        srcImg: srcBelaz,
        link: "https://dmitriywolf.github.io/belaz/dist/"
      },
      {
        id: this.startIdWorks++,
        filterT: "lp",
        title: "Continent",
        desc: "Landing Page",
        stack: ["Sass", "Bootstrap", "Gulp", "Webpack", "Babel.js"],
        srcImg: srcContinent,
        link: "https://dmitriywolf.github.io/contient/dist/"
      },
      {
        id: this.startIdWorks++,
        filterT: "lp",
        title: "Yoga",
        desc: "Landing Page",
        stack: ["Sass", "Bootstrap", "Gulp", "Webpack", "Babel.js"],
        srcImg: srcYoga,
        link: "https://dmitriywolf.github.io/yoga/dist/"
      },
      {
        id: this.startIdWorks++,
        filterT: "sp",
        title: "Mining Courses",
        desc: "Single Page",
        stack: ["Sass", "Bootstrap", "Gulp", "Webpack", "Babel.js"],
        srcImg: srcCourses,
        link: "https://dmitriywolf.github.io/courses/dist/"
      },
      {
        id: this.startIdWorks++,
        title: "Bouncy",
        filterT: "lp",
        desc: "Landing Page",
        stack: ["Sass", "Bootstrap", "Gulp", "Webpack", "Babel.js"],
        srcImg: srcBouncy,
        link: "https://dmitriywolf.github.io/bouncy/dist/"
      },
      {
        id: this.startIdWorks++,
        title: "23 Degree",
        filterT: "lp",
        desc: "Landing Page",
        stack: ["Sass", "Bootstrap", "Gulp", "Webpack", "Babel.js"],
        srcImg: srcDegree,
        link: "https://dmitriywolf.github.io/degree/dist/"
      },
      {
        id: this.startIdWorks++,
        title: "Дома на века",
        filterT: "lp",
        desc: "Landing Page",
        stack: ["Sass", "Bootstrap", "Gulp", "Webpack", "Babel.js"],
        srcImg: srcHouses,
        link: "https://dmitriywolf.github.io/houses/dist/"
      },
      {
        id: this.startIdWorks++,
        title: "Granit",
        filterT: "lp",
        desc: "Landing Page",
        stack: ["Sass", "Bootstrap", "Gulp", "Webpack", "Babel.js"],
        srcImg: srcGranit,
        link: "https://dmitriywolf.github.io/granit/dist/"
      },
      {
        id: this.startIdWorks++,
        title: "Irvas",
        filterT: "lp",
        desc: "Landing Page",
        stack: ["Sass", "Bootstrap", "Gulp", "Webpack", "Babel.js"],
        srcImg: srcIrvas,
        link: "https://dmitriywolf.github.io/irvas/dist/"
      },
      {
        id: this.startIdWorks++,
        title: "Todo app",
        filterT: "sp",
        desc: "Single Page",
        stack: ["Sass", "Bootstrap", "Gulp", "Webpack", "Babel.js"],
        srcImg: srcTodoApp,
        link: "https://dmitriywolf.github.io/todoapp/dist/"
      },
      {
        id: this.startIdWorks++,
        title: "Shopno",
        filterT: "lp",
        desc: "Landing Page",
        stack: ["Sass", "Bootstrap", "Gulp", "Webpack", "Babel.js"],
        srcImg: srcShopno,
        link: "https://dmitriywolf.github.io/shopno/dist/"
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


