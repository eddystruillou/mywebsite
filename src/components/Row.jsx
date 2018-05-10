import React, { Component } from 'react';
import './Row.css';
import Projet1 from '../images/chalets.png';
import Projet2 from '../images/festiv.png';
import Projet3 from '../images/gener.png';
import Projet4 from '../images/jeu.png';
import Projet5 from '../images/restau.png';
import Projet6 from '../images/todo.png';


class Row extends Component {
  render() {
    return (
      <div className="container text-center">
      <h2>Réalisations</h2>
        <div className="row">
          <div className="col-4">
            <a href="http://eddystruillou.com/"><img src={Projet1} alt="chalets" className="img-fluid"/></a>
          </div>
          <div className="col-4">
            <a href="http://festivaldesfilmsdepleinair.eddystruillou.com/"><img src={Projet2} alt="festiv" className="img-fluid"/></a>
          </div>
          <div className="col-4">
            <a href="http://projet5.eddystruillou.com/"><img src={Projet3} alt="gener" className="img-fluid"/></a>
          </div>
          <div className="col-4">
            <a href="http://projet6.eddystruillou.com/"><img src={Projet4} alt="jeu" className="img-fluid"/></a>
          </div>
          <div className="col-4">
            <a href="http://projet7.eddystruillou.com/"><img src={Projet5} alt="restau" className="img-fluid"/></a>
          </div>
          <div className="col-4">
            <a href="http://projet8.eddystruillou.com/"><img src={Projet6} alt="todo" className="img-fluid"/></a>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Row;