import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
