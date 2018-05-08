import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Row from '../components/Row';
import './Home.css';

class Home extends Component {
  render () {
    return (
      <div>
        <Jumbotron title="Welcome" subtitle="Petit recap de ce que vous allez trouver sur mon site" />
        <Navbar />
        <div className="container">
          <h2>Page d'accueil</h2>
            <p>
              Premier paragraphe
            </p>
            <h2>Réalisations</h2>
          <Row />
          </div>
          <Footer />
      </div>
    );
  }
}

export default Home;