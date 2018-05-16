import React, { Component } from 'react';
import './Row2.css';
import logo from '../images/logo1.png';

class Etudes extends Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="parallax text-center">
          <div className="row">
          <div className="col-5 pt-3">
              <h2>Job</h2>
              <p>
              J'ai 24 ans, je suis développeur Front-End. <br/>
              Ce que j'aime dans ce métier.. la liberté d'expression qui s'offre à nous,
              laisser libre cours à notre imagination, repousser ses limites chaque jour. <br/>
              Le fait d'apprendre tout au long de sa carrière rend ce métier 
              encore plus attrayant.
              </p>
            </div>
            <div className="col-2 pt-4">
              <img src={logo} id="logo" alt="logo"/>
            </div>
            <div className="col-5 pt-3">
              <h2>Compétences</h2>
              <p>
              Les projets que j'ai rélisé m'ont permis de maîtriser les langages HTML5, CSS3, JavaScript 
              ainsi que différents framework tel que Bootstrap, SASS, jQuery et React. <br/>
              J'ai également acquis de l'expérience avec l'utilisation du MVC, d'API REST,
              la programmation orientée objet (POO) et l'outil de versionning git.
              </p>
            </div>
            <div className="col-12">
            <a href="https://drive.google.com/open?id=1D_08eQuzJUFgvE-9U1EZQSsZ8Y4ZF0qC" target="_blank"><button type="button" className="btn btn-dark">Voir CV</button></a>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Etudes;