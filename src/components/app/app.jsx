import React, {Component} from 'react';
import './app.css';
import './img/sprite.svg';

import Logo from "../logo";
import Nav from "../nav";
import Burger from "../burger";

import AppTitle from "../app-title";
import Skills from "../skills";

export default class App extends Component {

  render() {
    return (
        <div className="app">

          <header className="app__header">
            <div className="app__container">
              <div className="header__inner">
                <Logo/>
                <Nav/>
                <Burger/>
              </div>
            </div>
          </header>

          <main className="app__main">
            <div className="app__container">
              <div className="app__inner">

                <AppTitle/>

                <Skills/>



              </div>
            </div>
          </main>

          <footer className="app__footer">

          </footer>


        </div>
    );


  }
}


