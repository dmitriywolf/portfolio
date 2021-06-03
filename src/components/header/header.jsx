import React, {Component} from "react";
import "./header.css"

import Logo from "../logo";
import Nav from "../nav";
import Burger from "../burger";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      openBurger: false
    };
  }

  onToggleBurger = () => {
    this.setState(({showMenu, openBurger}) => {
      return {
        showMenu: !showMenu,
        openBurger: !openBurger
      }
    })
  };

  render() {
    const {fixedHeader} = this.props;
    let {showMenu, openBurger} = this.state;

    let classesHeader = "";
    let classesNav = "";

    if(fixedHeader) {
      classesHeader += ' _fixed animated bounceInDown';
      classesNav += ' _fixed';
    }


    return (
        <header className={`header ${classesHeader}`} id="header">
          <div className="container">
            <div className="header__inner">
              <Logo/>
              <Nav showMenu={showMenu} clazz={classesNav}/>
              <Burger openBurger={openBurger} onBurger={this.onToggleBurger}/>
            </div>
          </div>
        </header>
    )
  }
};

