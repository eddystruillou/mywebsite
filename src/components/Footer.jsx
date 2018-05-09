import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render () {
    return (
      <footer className="footer text-center">
        <div className="container">
          <span className="text-muted">Eddy Struillou &#169; {new Date().getFullYear()}</span>
        </div>
      </footer>
    );
  }
}

export default Footer;