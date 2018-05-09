import React, { Component } from 'react';
import './Jumbotron.css';
import logo from '../images/logo1.png';

class Jumbotron extends Component {
  render () {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
        </div>
          <img src={logo} alt="logo" className="me"/>
      </div>
    );
  }
}

export default Jumbotron;