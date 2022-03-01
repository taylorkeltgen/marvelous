import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, CardGroup, Form } from "react-bootstrap";
import HeroList from "../HeroList";
import axios from "axios";

const Search = () => {
  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState();
  const clicked = () => {
    // declaring variables needed for an API call as per Marvel documentation
    const md5 = require("md5");
    const privateKey = "c9e3d0742ac2221695971bb908881f232f6f4a61";
    const publicKey = "1f3466c186b0df273e3fc7f5e5e11ebc";
    const ts = new Date().getTime();
    const stringToHash = ts + privateKey + publicKey;
    const token = md5(stringToHash);
    const BASE_URL =
      "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" +
      search;
    const testUrl =
      BASE_URL + "&ts=" + ts + "&apikey=" + publicKey + "&hash=" + token;

    // making API call using axios
    axios.get(`${testUrl}`).then((response) => {
      console.log(response.data.data);
      setCharacter(response.data.data.results);
    });
  };
  // collecting user inputed search term
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Container fluid>
      <Form>
        <Row className="align-items-center">
          <Col sm={2} className="my-1">
            <input
              type="text"
              placeholder="Search here..."
              value={search}
              onChange={handleInputChange}
            ></input>
          </Col>
          <Col sm={3} className="my-1">
            <Button type="button" onClick={clicked}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Container>
        <CardGroup>
          <HeroList heroDatalist={character}></HeroList>
        </CardGroup>
      </Container>
    </Container>
  );
};

export default Search;
