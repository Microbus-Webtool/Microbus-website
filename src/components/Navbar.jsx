import React from 'react'
import "../styles/navbar.scss"


const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/micro_logo_black.png" alt="" />
      </div>

      <div className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar