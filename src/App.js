import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Portfolio from './components/portfolio/portfolio';
import BlogIndex from './containers/blogIndex';
import BlogShow from './components/blogShow/blogShow'
import Resume from './containers/resume';
import About from './components/about/about';
import Contact from './components/contact/contact';
import NavBar from './components/navBar/navBar';
import Header from './components/header/header'
import Footer from './components/footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Header />
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blog" component={BlogIndex} />
          <Route path="/blog/:slug" component={BlogShow} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
