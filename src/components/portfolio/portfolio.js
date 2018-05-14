import React, { Component } from 'react';
import spaceXrecaps from '../../images/spaceXrecaps.png';
import trailblazer from '../../images/trailblazer.png';
import './portfolio.css'

class Portfolio extends Component {
  render() {
    return(
      <div>
        <h1>Projects</h1>
        <div className="projects">
          <div className="project">
            <a href='https://spacexrecaps.herokuapp.com' target="_blank"><h3>SpaceXrecapS</h3></a>
            <a href='https://spacexrecaps.herokuapp.com'><img src={spaceXrecaps}/></a>
            <a href='https://github.com/ackerm44/space_x_recaps' target="_blank"><p>GitHub</p></a>
          </div>
          <div className="project">
            <a href='https://michigantrailblazer.herokuapp.com' target="_blank"><h3>Michigan Trailblazer</h3></a>
            <a href='https://michigantrailblazer.herokuapp.com'><img src={trailblazer} /></a>
            <a href='https://github.com/ackerm44/trailblazer' target="_blank"><p>GitHub</p></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
