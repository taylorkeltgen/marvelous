import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Navbar.Brand>
        {' '}
        <Link data-testid="about" to="/" className="nav-link">
          <h1 className="page-title">MARVELOUS</h1>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-dark">
            <ul className="navbar-nav ms-auto">
              <li>
                <Link data-testid="about" to="/" className="nav-link">
                  <h5 className="pink text-nowrap">Home</h5>
                </Link>
              </li>
              <li>
                <Link data-testid="search" to="/search" className="nav-link">
                  <h5 className="pink">Search</h5>
                </Link>
              </li>
              <li>
                <Link data-testid="contact" to="/spotlight" className="nav-link">
                  <h5 className="pink">Spotlight</h5>
                </Link>
              </li>
              <li>
                <Link data-testid="resume" to="/login" className="nav-link">
                  <h5 className="pink">Login</h5>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

