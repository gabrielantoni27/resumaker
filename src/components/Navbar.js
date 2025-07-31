import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#a259ff" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8zM13 3.5L18.5 9H14a1 1 0 0 1-1-1V3.5z" />
          </svg>
        </span>
        <div className="brand-text">
          <span className="brand-name">ResuMaker</span>
          <span className="brand-byline">by Gabriel Antoni</span>
        </div>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;