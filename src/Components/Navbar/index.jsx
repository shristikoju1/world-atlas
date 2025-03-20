import React from 'react'
import './style.scss'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="left brand-logo">WorldAtlas</a>
          <ul className="right">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">About</a></li>
            <li><a href="collapsible.html">Country</a></li>
            <li><a href="collapsible.html">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

