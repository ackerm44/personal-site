import React, { Component } from 'react';
import amanda from '../../images/amanda.jpg'
import './about.css'

class About extends Component {
  render() {
    return (
      <div>
        <div className="aboutContent">
          <img src={amanda}/>
          <div >
            <p>Hello! My name is Amanda Ackerman and I am a web developer from
            Northern Michigan. I am passionate about coding, hiking, perennial gardens,
            trying new foods, painting and live music. </p>

            <p>I am Flatiron School graduate for Full Stack Web Development and a
            Michigan State University graduate for Economics. </p>
          </div>
          <h3>----------------------</h3>
          <h2>I specialize in:</h2>
          <p>RUBY • RAILS • JAVASCRIPT • JQUERY • REACT • REDUX • SQL • CSS • HTML</p>
          <h2>My skill set includes:</h2>
          <p>GIT • OOP & FP • AJAX • TESTING • UI DESIGN • AGILE/SCRUM</p>
        </div>


      </div>
    )
  }
}

export default About;
