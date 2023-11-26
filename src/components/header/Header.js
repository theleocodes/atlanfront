import React from 'react';
import './header.css';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { Queries } from '../query/Queries';

const Header = React.memo(() => {
  const handleMouseMove = (e) => {
    // Add sparkle effect logic here, for example:
    const sparkle = document.createElement('span');
    sparkle.className = 'sparkle';
    sparkle.style.top = `${e.clientY}px`;
    sparkle.style.left = `${e.clientX}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  };

  return (
    <Router>
      <header className="bg-gray-900 py-4" onMouseMove={handleMouseMove}>
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <h1 className="text-white text-3xl font-semibold">SQL Query Editor</h1>
          </Link>
          <nav className="text-white text-lg">
            <ul className="flex items-center space-x-10">
              <li className="nav-item">Tables</li>
              <li className="nav-item">
                <NavLink to="/queries" activeClassName="active-link">
                  Queries
                </NavLink>
              </li>
              <li className="nav-item">About</li>
              <li className="nav-item">Documentation</li>
              <li className="nav-item">Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    </Router>
  );
});

export default Header;

