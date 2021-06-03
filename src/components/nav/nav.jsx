import React, {Component} from 'react';
import './nav.css';

import NavLink from '../nav-link'

export default class Nav extends Component {


  render() {

    const {showMenu} = this.props;

    let classes = "";

    if (showMenu) {
      classes += ' _show'
    }


    return (
        <nav className={`nav ${classes}`}>
          <NavLink link="main"/>
          <NavLink link="skills"/>
          <NavLink link="works"/>
        </nav>
    )
  }
};
