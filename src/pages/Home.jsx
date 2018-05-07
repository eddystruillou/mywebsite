import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Welcome</h2>
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