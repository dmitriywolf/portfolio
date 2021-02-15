import React from 'react';

const Contacts = () => {
  return (
      <div>
        <div className="footer__contacts contact">
          <a className="contact__item" href="tel:+380939345992">
            <svg className="contact__icon">
              <use xlinkHref="img/sprite.svg#icon-phone"/>
            </svg>
            +38093934599*
          </a>
          <a className="contact__item" href="mailto:dmitriy-dev@ukr.net">
            <svg className="contact__icon">
              <use xlinkHref="img/sprite.svg#icon-email"/>
            </svg>
            dmitriy-dev@ukr.net
          </a>
          <a className="contact__item" href="https://github.com/dmitriywolf" target="_blank">
            <svg className="contact__icon">
              <use xlinkHref="img/sprite.svg#icon-github"/>
            </svg>
            DmitriyWolf
          </a>
        </div>
      </div>
  )
};

export default Contacts;