import React, {Component} from 'react';
import './app.css';
import './img/sprite.svg';

import Logo from "../logo";
import Nav from "../nav";
import Burger from "../burger";

import AppTitle from "../app-title";
import Skills from "../skills";
import CVButton from "../cv-button";

import Contacts from '../contacts';
import ContactForm from '../contact-form';

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

                <AppTitle/>
                <div className="app__wrapper">
                  <Skills/>

                  <CVButton/>

                </div>
                <div className="app__wrapper">

                  <Contacts/>

                  <ContactForm/>

                </div>
              </div>

            </div>
          </main>

          <Works/>

        </div>
    );
  }
}


