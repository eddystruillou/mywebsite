import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-md navbar-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-md-center" id="navbarCollapse">
        <ul className="navbar-nav">
          <li className="nav-item px-3 active">
            <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item px-3">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item px-3">
            <Link className="nav-link" to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default Navbar;