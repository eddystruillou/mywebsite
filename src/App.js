import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Projects from './pages/Projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
        </div>
      </Router>
    );
  }
}

export default App;
