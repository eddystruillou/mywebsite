import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Projects extends Component {
  render () {
    return (
      <div>
        <Jumbotron title="Projets" subtitle="les projets que j'ai réalisé" />
        <Navbar />
        <div className="container">
          <h2>Projets</h2>
            <p>
              Concernant les projets
            </p>
          </div>
          <Footer />
      </div>
    );
  }
}

export default Projects;