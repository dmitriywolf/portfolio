import React from 'react';
import './nav-link.css';

const NavLink = (props) => {
  const {link} = props;
  return (
      <a className="nav__link" href={`#${link}`}>{link}</a>
  )
};
export default NavLink;
