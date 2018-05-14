import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Row from '../components/Row';
import Parcours from '../components/Row2';
import Contact from '../components/Contact';

class Home extends Component {
  render () {
    return (
      <div>
        <Jumbotron title="Bienvenue" subtitle="Moi c'est Eddy"/>
        <Navbar />
        <div className="container">
          <Parcours />
          <Row />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;