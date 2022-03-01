import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

<Navbar bg="danger" variant="dark" expand="sm">
    <Navbar.Brand href="/">MARVELOUS</Navbar.Brand>
    <Navbar className="me-auto">
      <Navbar.Link href="./home">Home</Navbar.Link>
      <Navbar.Link href="./search">Search</Navbar.Link>
      <Navbar.Link href="./spotlight">Spotlight</Navbar.Link>
      <Navbar.Link href="./login">Login</Navbar.Link>
    </Navbar>
  </Navbar>