import React, {Component} from 'react';
import './app.css';
import './img/sprite.svg';

import Logo from "../logo";
import Nav from "../nav";
import Burger from "../burger";

import AppTitle from "../app-title";
import Skills from "../skills";

import Contacts from '../contacts';

import Works from '../works';

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



                <div className="app__wrap">
                  {/*<AppTitle/>*/}
                  {/*<Skills/>*/}
                  <Works/>


                </div>
              </div>
            </div>
          </main>
          <div className="contacts">
            <div className="app__container">
              <Contacts/>
            </div>
          </div>
        </div>
    );
  }
}


