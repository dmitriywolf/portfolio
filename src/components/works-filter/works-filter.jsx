import React, {Component} from 'react';
import './works-filter.css';


export default class WorksFilter extends Component {

  filterButtons = [
    {name: 'all', label: "All"},
    {name: 'lp', label: "Landing Page"},
    {name: 'sp', label: "Single Page"},
    {name: 'other', label: "Other"},
  ];

  render() {

    const {filter, onFilter} = this.props;

    const buttons = this.filterButtons.map(({name, label}) => {
      const isActive = filter === name;
      const filterClass = isActive ? '_active' : '';

      return (
          <button className={`filter__btn ${filterClass}`}
                  type="button"
                  key={name}
                  onClick={() => onFilter(name)}>
            {label}
          </button>
      )
    });


    return (
        <div className="filter__wrapper">
          <div className="container">
            <h3 className="filter__title">Works</h3>

            <div className="filter">
              <div className="filter__buttons">
                {buttons}
              </div>
            </div>
          </div>
        </div>
    )
  }


};

