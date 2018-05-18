import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Row.css';


class Row extends Component {
  render() {
    return (
      <div className="container text-center">
      <h2>Réalisations</h2>
        <div className="row">
          <div className="col-4">
            <a href="http://eddystruillou.com/" target="_blank"><img src="https://res.cloudinary.com/xyao/image/upload/v1526631667/chalets.png" alt="chalets" className="img-fluid"/></a>
          </div>
          <div className="col-4">
            <a href="http://festivaldesfilmsdepleinair.eddystruillou.com/" target="_blank"><img src="https://res.cloudinary.com/xyao/image/upload/v1526631328/festiv.png" alt="festiv" className="img-fluid"/></a>
          </div>
          <div className="col-4">
            <a href="http://projet5.eddystruillou.com/" target="_blank"><img src="https://res.cloudinary.com/xyao/image/upload/v1526631847/gener.png" alt="gener" className="img-fluid"/></a>
          </div>
          <div className="col-4">
            <a href="http://projet6.eddystruillou.com/" target="_blank"><img src="https://res.cloudinary.com/xyao/image/upload/v1526631978/jeu.png" alt="jeu" className="img-fluid"/></a>
          </div>
          <div className="col-4">
            <a href="http://projet7.eddystruillou.com/" target="_blank"><img src="https://res.cloudinary.com/xyao/image/upload/v1526632060/restau.png" alt="restau" className="img-fluid"/></a>
          </div>
          <div className="col-4">
            <a href="http://projet8.eddystruillou.com/" target="_blank"><img src="https://res.cloudinary.com/xyao/image/upload/v1526632112/todo.png" alt="todo" className="img-fluid"/></a>
          </div>
          <div className="col-12 pt-3">
            <Link className="nav-link" to="/projects"><button type="button" className="btn btn-dark">Plus d'infos</button></Link>
          </div>
        </div>
        <hr id="hreal" />
      </div>
    );
  }
}

export default Row;