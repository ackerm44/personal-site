import React from 'react';
import header from '../../images/header-with-name.png';
import './header.css'

const Header = () => {
  return (
    <div className="parallax-header" style={{backgroundImage: "url(" + header + ")"}}>
    </div>
  )
}

export default Header;
