import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Row2.css';
import logo from '../images/logo1.png';

class Etudes extends Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="parallax text-center">
          <div className="row">
          <div className="col-1"></div>
            <div className="col-4 pt-5">
              <img src={logo} id="logo" alt="logo"/>
            </div>

            <div className="col-6 pt-5">
              <h2>Parcours</h2>
              <p>
              Moi c'est Eddy, j'ai 24 ans, je suis développeur Front-End.<br/>
              Ce que j'aime dans ce métier.. la liberté d'expression qui s'offre à nous,
              laisser libre cours à notre imagination, repousser ses limites chaque jour.<br/>
              Le fait d'apprendre de nouvelles choses tout au long de sa carrière rend ce métier 
              encore plus attrayant. 
              </p>
              <Link className="nav-link" to="/about"><button type="button" className="btn btn-dark">Plus d'info</button></Link>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Etudes;