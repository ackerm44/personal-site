import React, { Component } from 'react';
import placeholder from '../../images/placeholder.png'
import './about.css'

class About extends Component {
  render() {
    return (
      <div>
        <h1>RUBY • RAILS • JAVASCRIPT • JQUERY • REACT • REDUX • SQL • CSS • HTML</h1>
        <div className="aboutContent">
          <img src={placeholder}/>
          <div >
            <p>Hello! My name is Amanda Ackerman and I am a web developer in
            Northern Michigan. </p>

            <p>I have been a few things in the past but one thing was for certain - I
            always gravitated toward the tech roles in those positions and in particular,
            creating web sites for the businesses I worked in.</p>

            <p>In 2017, I joined Flatiron School for full stack web development
            and graduated in March of 2018.
            </p>

            <h2>Resume</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
