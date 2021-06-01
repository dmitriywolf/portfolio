import React, {Component} from 'react';
import './app.css';
import './img/sprite.svg';

import Header from '../header';
import Intro from "../intro";
import Skills from "../skills";
import WorksFilter from '../works-filter';


export default class App extends Component {

  render() {
    return (
        <div className="app">
          <Header/>
          <Intro/>
          <Skills/>
          <WorksFilter/>
        </div>
    );
  }
}


