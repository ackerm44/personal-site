import React, { Component } from 'react';
import './contact.css';
import email from '../../images/envelope.svg';
import github from '../../images/github-square.svg';
import linkedin from '../../images/linkedin.svg';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1>GET IN TOUCH</h1>
        <a href="https://github.com/ackerm44" target="_blank"><img src={github} alt="github"/></a>
        <a href="mailto:ackerm44@gmail.com" target="_blank"><img src={email} alt="e-mail"/></a>
        <a href="https://www.linkedin.com/in/ackerm44" target="_blank"><img src={linkedin} alt="linkedIn"/></a>
      </div>
    )
  }
}

export default Contact;
