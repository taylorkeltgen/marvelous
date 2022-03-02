import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";
import gif from "../../assets/images/nav.gif";

import Auth from "../../utils/auth";

function NavBar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar class="custom" variant="dark" expand="sm">
      <Navbar.Brand>
        {" "}
        <Link data-testid="home" to="/" className="nav-link">
          <h1 className="page-title">MARVELOUS</h1>
        </Link>
      </Navbar.Brand>
      <Container className="justify-content-md-center">
        <img class="navImg" src={gif} alt="Iron Man"></img>
      </Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-dark">
            <ul className="navbar-nav ms-auto">
              <li>
                <Link data-testid="home" to="/" className="nav-link">
                  <h5 className="">Home</h5>
                </Link>
              </li>
              <li>
                <Link data-testid="search" to="/search" className="nav-link">
                  <h5 className="">Search</h5>
                </Link>
              </li>
              <li>
                <Link
                  data-testid="spotlight"
                  to="/spotlight"
                  className="nav-link"
                >
                  <h5 className="">Spotlight</h5>
                </Link>
              </li>
              <li>
                {Auth.loggedIn() ? (
                  <Link
                    data-testid="logout"
                    to="/"
                    className="nav-link"
                    onClick={logout}
                  >
                    <h5 className="">Logout</h5>
                  </Link>
                ) : (
                  <Link data-testid="login" to="/login" className="nav-link">
                    <h5 className="">Login</h5>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
