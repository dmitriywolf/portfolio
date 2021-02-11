import React from 'react';

import './nav.css';

import NavLink from '../nav-link'

const Nav = () => {

  return(
      <nav className='nav'>
        <NavLink link="main" />
        <NavLink link="skills" />
        <NavLink link="works" />
        <NavLink link="contacts" />
      </nav>
  )
};

export default Nav;