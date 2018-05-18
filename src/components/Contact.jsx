import React, { Component } from 'react';
import "./Contact.css";


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
            <button type="submit" className="btn btn-dark">Envoyer</button>
          </form>
        </div>
        <div className="col-6 pt-4">
          <a href="https://twitter.com/eddy_struillou" className="contac" target="_blank"><img src="https://res.cloudinary.com/xyao/image/upload/v1526632563/twitter.png" alt="twitter"/></a>
          <a href="https://www.linkedin.com/in/eddy-struillou-58a732145/" className="contac" target="_blank"><img src="https://res.cloudinary.com/xyao/image/upload/v1526632541/linkedin.png" alt="linkedin"/></a>
          <a href="https://github.com/eddystruillou" className="contac" target="_blank"><img src="https://res.cloudinary.com/xyao/image/upload/v1526632492/github.png" alt="github"/></a>
          <a href="mailto:eddy.struillou@gmail.com" className="contac" target="_blank"><img src="https://res.cloudinary.com/xyao/image/upload/v1526632828/gmail.png" alt="gmail"/></a>
        </div>
      </div>
      </div>
    );
  }
}

export default Contact;