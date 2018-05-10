import React, { Component } from 'react';
import "./Contact.css";
import Twitter from '../images/twitter.png';
import Gmail from '../images/gmail.png';
import Linkedin from '../images/linkedin.png';
import Github from '../images/github.png';


class Contact extends Component {
  render () {
    return (
      <div className="container text-center">
        <h2>Contact</h2>
      <div className="row content">
        <div className="col-6">
          <form method="POST" action="https://formspree.io/eddy.struillou@gmail.com">
            <input type="email" name="email" placeholder="Your email"/>
            <textarea name="message" placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-dark">Send</button>
          </form>
        </div>
        <div className="col-6">
          <a href="https://twitter.com/eddy_struillou" className="contac"><img src={Twitter} alt="twitter"/></a>
          <a href="mailto:eddy.struillou@gmail.com" className="contac"><img src={Gmail} alt="gmail"/></a>
          <a href="https://www.linkedin.com/in/eddy-struillou-58a732145/" className="contac"><img src={Linkedin} alt="linkedin"/></a>
          <a href="https://github.com/eddystruillou" className="contac"><img src={Github} alt="github"/></a>
        </div>
      </div>
      <hr/>
      </div>
    );
  }
}

export default Contact;