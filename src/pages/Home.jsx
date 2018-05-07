import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

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
          </div>
          <Footer />
      </div>
    );
  }
}

export default Home;