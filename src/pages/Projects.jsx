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
        <Jumbotron title="Projets" subtitle="Quelques-unes de mes réalisations"/>
        <Navbar />
        <div className="container">
          <div className="parallax text-center">
          <div className="row">
            <div className="col-5 pt-5">
              <img src={Projet1} className="img-fluid" alt="chalet&caviar"/>
            </div>
            <div className="col-7 pt-5">
              <h2>Intégration Wordpress</h2>
              <p>
              Pour ce projet, le client était une agence immobilière d'une station de montagne.
              Possédant de nombreux chalets luxueux à vendre elle souhaitait pouvoir mettre à jour
              sont site régulièrement toute seule.
              La décision a été de partir sur la création d'un site sous Wordpress en respectant la ligne "luxe"
              de l'agence.
              </p>
              <a href="http://eddystruillou.com/"><button type="button" className="btn btn-dark">Voir</button></a>
            </div>
          </div>
        </div>
          <hr/>
        <div className="parallax text-center">
          <div className="row">
            <div className="col-7 pt-5">
              <h2>Documentation et Maquette</h2>
              <p>
              Ici, l'organisatrice du Festival des Films de Plein Air voulait sélectionner et projet des films
              d'auteur en plein air au pac Monceau à Paris.
              Le but était de rédiger un document de spécification technique du projet ainsi que présenter une maquette
              du futur site.
              </p>
              <a href="http://festivaldesfilmsdepleinair.eddystruillou.com/"><button type="button" className="btn btn-dark">Voir</button></a>
            </div>
            <div className="col-5 pt-5">
              <img src={Projet2} className="img-fluid" alt="festivaldesfilms"/>
            </div>
          </div>
        </div>
        <hr/>
        <div className="parallax text-center">
          <div className="row">
            <div className="col-5 pt-5">
              <img src={Projet3} className="img-fluid" alt="generateurcitations"/>
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
              <a href="http://projet5.eddystruillou.com/"><button type="button" className="btn btn-dark">Voir</button></a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="parallax text-center">
          <div className="row">
            <div className="col-7 pt-5">
              <h2>Jeu de plateau tour par tour</h2>
              <p>
              Conception d'un jeu en ligne en Vanilla JavaScript avec une organisation objet,
              dans lequel 2 joueurs évoluent chacun leur tour pour s'affronter.
              J'ai choisi d'utiliser canvas pour la gestion de ma grille pour permettre d'implanter 
              des animations au cas où le projet vienne à évoluer.
              </p>
              <a href="http://projet6.eddystruillou.com/"><button type="button" className="btn btn-dark">Voir</button></a>
            </div>
            <div className="col-5 pt-5">
              <img src={Projet4} className="img-fluid" alt="jeutourpartour"/>
            </div>
          </div>
        </div>
        <hr/>
        <div className="parallax text-center">
          <div className="row">
            <div className="col-5 pt-5">
              <img src={Projet5} className="img-fluid" alt="maprestauration"/>
            </div>
            <div className="col-7 pt-5">
              <h2>Site d'avis de restaurants</h2>
              <p>
              L'objectif ici : créer un service simple et utile qui permet d'avoir des avis 
              sur des restaurants autour de soi.
              Pour cela j'ai utilisé les API Google Maps et Google Places ainsi que Géolocalisation.
              Le projet à lui aussi été réalisé en Vanilla JavaScript avec une organisation objet.
              </p>
              <a href="http://projet7.eddystruillou.com/"><button type="button" className="btn btn-dark">Voir</button></a>
            </div>
          </div>
        </div>
        <hr/>
        <div className="parallax text-center">
          <div className="row">
            <div className="col-7 pt-5">
              <h2>Reprendre un projet existant</h2>
              <p> 
              Dans ce projet de "todo list" que j'ai récupéré, ma misson a été de corriger des bugs, ajouter des tests
              unitaires avec Jasmine et optimiser les performances.
              J'ai aussi effectué un audit de performance et une comparaison avec l'audit d'un site concurrent
              en rédigeant un wiki sur mon profil github.
              Pour finir, j'ai écrit un "guide utilisateur" ainsi qu'une documentation technique du projet et de son fonctionnement.
              </p>
              <a href="http://projet8.eddystruillou.com/"><button type="button" className="btn btn-dark">Voir</button></a>
            </div>
            <div className="col-5 pt-5">
              <img src={Projet6} className="img-fluid" alt="todolist"/>
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