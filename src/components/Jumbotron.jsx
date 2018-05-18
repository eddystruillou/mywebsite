import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
  render () {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center" id="titre">
        <h1>{this.props.title}</h1>
        <p className="lead">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;