import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Portfolio from './containers/portfolio';
import Blog from './containers/blog';
import Resume from './containers/resume';
import About from './containers/about';
import Contact from './containers/contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
