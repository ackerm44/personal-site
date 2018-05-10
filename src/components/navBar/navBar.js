import React from 'react';
import { NavLink } from 'react-router-dom'
import './navBar.css'

const NavBar = () => {
  return (
    <div className="navBar">
      <NavLink to="/" exact>Portfolio</NavLink>
      <NavLink to="/blog" exact>Blog</NavLink>
      <NavLink to="/about" exact>About</NavLink>
      <NavLink to="/resume" exact>Resume</NavLink>
      <NavLink to="/contact" exact>Contact</NavLink>
    </div>
  )

}

export default NavBar;
