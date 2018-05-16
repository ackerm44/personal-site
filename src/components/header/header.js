import React from 'react';
import header from '../../images/header.jpeg';
import './header.css'

const Header = () => {
  return (
    <div className="parallax-header" style={{backgroundImage: "url(" + header + ")"}}>
      <h1>Amanda<br /> Ackerman</h1>
    </div>
  )
}

export default Header;
