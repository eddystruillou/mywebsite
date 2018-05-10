import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Contact from '../components/Contact';

class About extends Component {
  render () {
    return (
      <div>
        <Jumbotron title="About" subtitle="quelque chose ici"/>
        <Navbar />
        <div className="container">
          <h2>A propos..</h2>
            <p>
              Moi c'est Eddy, j'ai 24 ans, je suis développeur Front-End.<br/>
              Ce que j'aime dans ce métier.. la liberté d'expression qui s'offre à nous,
              laisser libre cours à notre imagination, repousser ses limites chaque jour.<br/>
              Le fait d'apprendre de nouvelles choses tout au long de sa carrière rend ce métier 
              encore plus attrayant.
            </p>
            <p>
              Les projets que j'ai rélisé m'ont permis de maîtriser les langages 
              HTML5, CSS3, JavaScript ainsi que différents framework tel que 
              Bootstrap, SASS, jQuery, React et Vue.js. <br/>
              J'ai également acquis de l'expérience avec l'utilisation d'API REST, la programmation
              orientée objet (POO).
            </p>
          </div>
          <Contact />
          <Footer />
      </div>
    );
  }
}

export default About;