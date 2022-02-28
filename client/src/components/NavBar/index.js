import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);

<Navbar bg="rbg(255,0,0)" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#hero">Hero Of The Week</Nav.Link>
      <Nav.Link href="#forum">Forum</Nav.Link>
      <Nav.Link href="#search">Search</Nav.Link>
    </Nav>
    </Container>
  </Navbar>