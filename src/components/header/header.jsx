import React from "react";
import "./header.css"

import Logo from "../logo";
import Nav from "../nav";
import Burger from "../burger";

const Header = () => {
  return (
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <Logo/>
            <Nav/>
            <Burger/>
          </div>
        </div>
      </header>
  )
};

export default Header;
