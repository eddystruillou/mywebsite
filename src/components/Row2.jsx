import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Row2.css';
import Parcours from '../images/parcours.jpg';

class Etudes extends Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="parallax text-center">
          <div className="row">
            <div className="col-5 pt-5">
              <img src={Parcours} className="img-fluid"/>
            </div>
            <div className="col-1"></div>
            <div className="col-5 text-center pt-5">
              <h2>Parcours</h2>
              <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
              impression. 
              Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
              quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un 
              livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, 
              mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. 
              </p>
              <Link className="nav-link" to="/about"><button type="button" className="btn btn-info">Plus d'info</button></Link>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Etudes;