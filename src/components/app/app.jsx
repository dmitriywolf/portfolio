import React, {Component} from 'react';
import './app.css';
import './img/sprite.svg';

import Header from '../header';
import Intro from "../intro";
import Skills from "../skills";
import WorksFilter from '../works-filter';
import Works from '../works';
import Copyright from "../copyright";


export default class App extends Component {
  state = {
    fixedHeader: false
  };


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll = () => {
    let introHeight = document.getElementById('main').offsetHeight;
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > introHeight) {
      this.setState({fixedHeader: true})
    } else {
      this.setState({fixedHeader: false})
    }
  };


  render() {


    const {fixedHeader} = this.state;

    return (
        <div className="app">
          <Header fixedHeader={fixedHeader}/>
          <Intro/>
          <Skills/>
          <WorksFilter/>
          <Works/>
          <Copyright/>
        </div>
    );
  }
}


