import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Contact from '../components/Contact'

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
                <img src="https://res.cloudinary.com/xyao/image/upload/v1526632060/restau.png" className="img-fluid" alt="maprestauration"/>
              </div>
              <div className="col-7 pt-5">
                <h2>Site d'avis de restaurants</h2>
                <p>
                L'objectif ici : créer un service simple et utile qui permet d'avoir des avis 
                sur des restaurants autour de soi.
                Pour cela j'ai utilisé les API Google Maps et Google Places ainsi que Géolocalisation.
                Le projet a lui aussi été réalisé en Vanilla JavaScript avec une organisation objet.
                </p>
                <a href="http://projet7.eddystruillou.com/" target="_blank"><button type="button" className="btn btn-dark">Voir</button></a>
              </div>
            </div>
          </div>
          <hr/>
          <div className="parallax text-center">
            <div className="row">
              <div className="col-7 pt-3">
                <h2>Jeu de plateau tour par tour</h2>
                <p>
                Conception d'un jeu en ligne en Vanilla JavaScript avec une organisation objet,
                dans lequel 2 joueurs évoluent chacun leur tour pour s'affronter.
                J'ai choisi d'utiliser canvas pour la gestion de ma grille pour permettre d'implanter 
                des animations dans l'éventualité d'une évolution du projet.
                </p>
                <a href="http://projet6.eddystruillou.com/" target="_blank"><button type="button" className="btn btn-dark">Voir</button></a>
              </div>
              <div className="col-5 pt-3">
                <img src="https://res.cloudinary.com/xyao/image/upload/v1526631978/jeu.png" className="img-fluid" alt="jeutourpartour"/>
              </div>
            </div>
          </div>
          <hr/>
          <div className="parallax text-center">
            <div className="row">
              <div className="col-5 pt-3">
                <img src="https://res.cloudinary.com/xyao/image/upload/v1526632112/todo.png" className="img-fluid" alt="todolist"/>
              </div>
              <div className="col-7 pt-3">
                <h2>Reprendre un projet existant</h2>
                <p> 
                Dans ce projet de "todo list" que j'ai récupéré, ma misson a été de corriger des bugs, ajouter des tests
                unitaires avec Jasmine et optimiser les performances.
                J'ai aussi effectué un audit de performance et une comparaison avec l'audit d'un site concurrent
                en rédigeant un wiki sur mon profil github.
                Pour finir, j'ai écrit un "guide utilisateur" ainsi qu'une documentation technique du projet et de son fonctionnement.
                </p>
                <a href="http://projet8.eddystruillou.com/" target="_blank"><button type="button" className="btn btn-dark">Voir</button></a>
              </div>
            </div>
          </div>
          <hr/>
          <div className="parallax text-center">
            <div className="row">
              <div className="col-7 pt-3">
                <h2>Générateur de citations</h2>
                <p>
                Construction d'un générateur de citations en Vanilla JavaScript. Les citations sont construites aléatoirement en
                assemblant des morceaux de phrase.
                Vous pouvez choisir le nombre de citations générées (de 1 à 5) et entre 2 types de
                générateurs (Anglais ou Français).
                Une fois les citations générées, vous pouvez choisir de continuer ou d'arrêter le programme.
                </p>
                <a href="http://projet5.eddystruillou.com/" target="_blank"><button type="button" className="btn btn-dark">Voir</button></a>
              </div>
              <div className="col-5 pt-3">
                <img src="https://res.cloudinary.com/xyao/image/upload/v1526631847/gener.png" className="img-fluid" alt="generateurcitations"/>
              </div>
            </div>
          </div>
          <hr/>
          <div className="parallax text-center">
            <div className="row">
              <div className="col-5 pt-3">
                <img src="https://res.cloudinary.com/xyao/image/upload/v1526631328/festiv.png" className="img-fluid" alt="festivaldesfilms"/>
              </div>
              <div className="col-7 pt-3">
                <h2>Documentation et Maquette</h2>
                <p>
                Ici, l'organisatrice du Festival des Films de Plein Air voulait sélectionner et projeter des films
                d'auteur en plein air au parc Monceau à Paris.
                Le but étant de rédiger un document de spécification technique du projet ainsi que la présentation d'une maquette
                du futur site.
                </p>
                <a href="http://festivaldesfilmsdepleinair.eddystruillou.com/" target="_blank"><button type="button" className="btn btn-dark">Voir</button></a>
              </div>
            </div>
          </div>
          <hr/>
          <div className="parallax text-center">
            <div className="row">
              <div className="col-7 pt-3">
                <h2>Intégration Wordpress</h2>
                <p>
                Pour ce projet, le client, une agence immobilière d'une station de montagne.
                Possédant de nombreux chalets luxueux à vendre il souhaitait mettre à jour
                sont site régulièrement de façon autonome.
                La décision a été de partir sur la création d'un site sous Wordpress en respectant la ligne "luxe"
                de l'agence.
                </p>
                <a href="http://eddystruillou.com/" target="_blank"><button type="button" className="btn btn-dark">Voir</button></a>
              </div>
              <div className="col-5 pt-3">
                <img src="https://res.cloudinary.com/xyao/image/upload/v1526631667/chalets.png" className="img-fluid" alt="chalet&caviar"/>
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