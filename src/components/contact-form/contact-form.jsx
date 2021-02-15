import React from 'react';
import './contact-form.css';

const ContactForm = () => {
  return (
      <div className="contact-from__wrapper">
        <form>
          <label>
            Ваше имя <br/>
            <input type="text"/>
          </label><br/>
          <label>
            Ваше email <br/>
            <input type="email"/>
          </label><br/>
          <label>
            Ваше сообщение<br/>
            <textarea rows={5}>

          </textarea>
          </label>
        </form>
      </div>
  )
};

export default ContactForm;