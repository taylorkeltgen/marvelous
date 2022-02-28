import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  Form,
} from "react-bootstrap";
import axios from "axios";
require("dotenv").config();

const Search = () => {
  const [character, setCharacter] = useState([]);
  const [search, setSearch] = useState();
  const clicked = () => {
    // declaring variables needed for an API call as per Marvel documentation
    const md5 = require("md5");
    const privateKey = "7c102ae9dfa5e000b24a379d896608a72aab9b71";
    const publicKey = "22a7456573deb77de2473e3e16a78271";
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
          {character &&
            character.map((hero) => (
              <Row xs={2}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  />
                  <Card.Body>
                    <Card.Title>{hero.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Row>
            ))}
        </CardGroup>
      </Container>
    </Container>
  );
};

export default Search;
