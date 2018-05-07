import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
  render () {
    return (
      <div>
        <Jumbotron title="A propos" subtitle="Mon aventure jusqu'à présent" />
        <Navbar />
        <div className="container">
          <h2>About</h2>
            <p>
              A propos de moi..
            </p>
          </div>
          <Footer />
      </div>
    );
  }
}

export default About;