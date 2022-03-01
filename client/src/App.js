import React from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENT IMPORTS //
import Footer from "./components/Footer";
import HeroSearch from "./pages/HeroSearch";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Spotlight from "./pages/Spotlight";
import NavBar from "./components/NavBar";

/// App Setup ///
function App() {
  return (
    <div className= "App">
      <ReactBootStrap.Navbar bg="danger" variant="dark">
    <Container>
    <ReactBootStrap.Navbar.Brand href="#home">MARVELOUS</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#search">Search</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#spotlight">Spotlight</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#login">Login</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    </Container>
  </ReactBootStrap.Navbar>
      </div>
  );
}

export default App;
