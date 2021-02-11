import React from 'react';

import './nav-link.css';

const NavLink = (props) => {

    return (
        <a className="nav__link" >{props.link}</a>
    )
};

export default NavLink;