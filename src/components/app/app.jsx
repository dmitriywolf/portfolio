import React, {Component} from 'react';
import './app.css';

import Logo from "../logo";
import Nav from "../nav";
import Burger from "../burger";

export default class App extends Component {

  render() {
    return (
        <div>

          <header className="header">
            <div className="container">
              <div className="header__inner">
                <Logo/>
                <Nav/>
                <Burger/>
              </div>
            </div>
          </header>

          <main>
            <section className="intro">
              <div className="container">
                <div className="intro__inner">
                  <h1 className="intro__title">Hello, I'm <span className="green-text">Dmitriy</span></h1>
                  <h2 className="intro__subtitle"><span className="brown-text">Welcome</span> to my portfolio page
                    <span className="brown-text">:)</span></h2>
                </div>
              </div>

            </section>



          </main>

        </div>



    )


  }
}


