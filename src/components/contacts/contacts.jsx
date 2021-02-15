import React from 'react';
import './contacts.css';

const Contacts = () => {
  return (
        <div className="footer__contacts contact">

          <a className="contact__item" href="tel:+380939345992">
            <svg className="contact__icon">
              <use xlinkHref="img/sprite.svg#icon-phone"/>
            </svg>
            <span>+38093934599*</span>
          </a>


          <a className="contact__item" href="mailto:dmitriy-dev@ukr.net">
            <svg className="contact__icon">
              <use xlinkHref="img/sprite.svg#icon-email"/>
            </svg>
            <span>dmitriy-dev@ukr.net</span>
          </a>


          <a className="contact__item" href="https://github.com/dmitriywolf" target="_blank">
            <svg className="contact__icon">
              <use xlinkHref="img/sprite.svg#icon-github"/>
            </svg>
            <span>DmitriyWolf</span>
          </a>
        </div>
  )
};

export default Contacts;