import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Contact from '../components/Contact'
import Projet1 from '../images/chalets.png';
import Projet2 from '../images/festiv.png';
import Projet3 from '../images/gener.png';
import Projet4 from '../images/jeu.png';
import Projet5 from '../images/restau.png';
import Projet6 from '../images/todo.png';

class Projects extends Component {
  render () {
    return (
      <div>
        <Jumbotron title="Projets" subtitle="les projets que j'ai réalisé" />
        <Navbar />
        <div className="container">
          <h2>Projets</h2>
          <div className="parallax text-center">
          <div className="row">
            <div className="col-5 pt-5">
              <img src={Projet1} className="img-fluid"/>
            </div>
            <div className="col-7 pt-5">
              <h2>Intégration Wordpress</h2>
              <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
              impression. 
              Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
              quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un 
              livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, 
              mais s'est aussi adapté à la bureautique informatique, sans que 
              </p>
              <a href="http://eddystruillou.com/"><button type="button" className="btn btn-info">Plus d'info</button></a>
            </div>
          </div>
        </div>
          <hr/>
        <div className="parallax text-center">
          <div className="row">
            <div className="col-7 pt-5">
              <h2>Solution technique d'une application de restauration</h2>
              <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
              impression. 
              Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
              quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un 
              livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, 
              mais s'est aussi adapté à la bureautique informatique, sans que 
              </p>
              <a href="http://festivaldesfilmsdepleinair.eddystruillou.com/"><button type="button" className="btn btn-info">Plus d'info</button></a>
            </div>
            <div className="col-5 pt-5">
              <img src={Projet2} className="img-fluid"/>
            </div>
          </div>
        </div>
        <hr/>
        <div className="parallax text-center">
          <div className="row">
            <div className="col-5 pt-5">
              <img src={Projet3} className="img-fluid"/>
            </div>
            <div className="col-7 pt-5">
              <h2>Générateur de citations</h2>
              <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
              impression. 
              Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
              quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un 
              livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, 
              mais s'est aussi adapté à la bureautique informatique, sans que 
              </p>
              <a href="http://projet5.eddystruillou.com/"><button type="button" className="btn btn-info">Plus d'info</button></a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="parallax text-center">
          <div className="row">
            <div className="col-7 pt-5">
              <h2>Jeu de plateau tour par tour</h2>
              <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
              impression. 
              Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
              quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un 
              livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, 
              mais s'est aussi adapté à la bureautique informatique, sans que 
              </p>
              <a href="http://projet6.eddystruillou.com/"><button type="button" className="btn btn-info">Plus d'info</button></a>
            </div>
            <div className="col-5 pt-5">
              <img src={Projet4} className="img-fluid"/>
            </div>
          </div>
        </div>
        <hr/>
        <div className="parallax text-center">
          <div className="row">
            <div className="col-5 pt-5">
              <img src={Projet5} className="img-fluid"/>
            </div>
            <div className="col-7 pt-5">
              <h2>Site d'avis de restaurants</h2>
              <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
              impression. 
              Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
              quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un 
              livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, 
              mais s'est aussi adapté à la bureautique informatique, sans que 
              </p>
              <a href="http://projet7.eddystruillou.com/"><button type="button" className="btn btn-info">Plus d'info</button></a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="parallax text-center">
          <div className="row">
            <div className="col-7 pt-5">
              <h2>Reprendre un projet existant</h2>
              <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
              impression. 
              Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
              quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un 
              livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, 
              mais s'est aussi adapté à la bureautique informatique, sans que 
              </p>
              <a href="http://projet8.eddystruillou.com/"><button type="button" className="btn btn-info">Plus d'info</button></a>
            </div>
            <div className="col-5 pt-5">
              <img src={Projet6} className="img-fluid"/>
            </div>
          </div>
        </div>
          <hr/>
          </div>
          <Contact />
          <Footer />
      </div>
    );
  }
}

export default Projects;