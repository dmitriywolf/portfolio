import React from 'react';
import './work.css';

const Work = (props) => {

  const {title, desc, stack, srcImg, link} = props;

  const items = stack.map((item, index) => {
    return (
        <span key={index}>{item}</span>
    )
  });


  return (
      <>
        <div className="work">
          <img className="work__img" src={srcImg} alt={title}/>

          <div className="work__content">
            <h3 className="work__title">{title}</h3>
            <p className="work__desc">{desc}</p>
            <div className="work__stack-wrap">
              <span>Stack:</span>
              <div className="work__stack">{items}</div>
            </div>

            <div className="work__button-wrapper">
              <a className="work__button" href={link} target="_blank">
                <svg className="work__button-img" width="14" height="14">
                  <use xlinkHref="img/sprite.svg#icon-web"/>
                </svg>
                <span className="work__button-text">Go to Site</span>
              </a>
            </div>
          </div>

        </div>
      </>
  )
};

export default Work;
