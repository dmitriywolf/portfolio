import React, {Component} from 'react';
import './burger.css';


export default class Burger extends Component {

  render() {

    const {openBurger, onBurger} = this.props;

    let classes = "";

    if (openBurger) {
      classes += ' _burger--close'
    }

    return (
        <button className={`burger ${classes}`} onClick={onBurger}>
          <span className="burger__item">Menu</span>
        </button>
    )
  }

}
;
