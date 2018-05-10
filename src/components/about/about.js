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
            Northern Michigan. I am also passionate about hiking, perennial gardens,
            trying new foods, painting and live music. </p>

            <p>In 2017, I joined Flatiron School for Full Stack Web Development
            and graduated in March of 2018. </p>

          </div>
          <h2>RESUME</h2>
          <p>SKILLS & KNOWLEDGE: GIT, OOP & FP, AJAX, TESTING, UI DESIGN, AGILE/SCRUM</p>
          <p>Education</p>
          <p>Flatiron School </p>
          <p>Michigan State University</p>
          <p>Bachelor of Science, Economics</p>
        </div>
      </div>
    )
  }
}

export default About;
