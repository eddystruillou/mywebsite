import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Row from '../components/Row';
import Parcours from '../components/Row2';
import Contact from '../components/Contact';
import './Home.css';

class Home extends Component {
  render () {
    return (
      <div>
        <Jumbotron title="Welcome" subtitle="quelque chose ici"/>
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