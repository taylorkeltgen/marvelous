import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function FeaturedCharacters(props) {
  return (
    <>
      <div className="inlineHeader">
        <h3>Featured Characters</h3>
      </div>
      <Container>
        <Row xs={1} md={2} className="g-4">
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://marvelous-project-3.s3.us-east-2.amazonaws.com/shang-chi.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://marvelous-project-3.s3.us-east-2.amazonaws.com/shang-chi.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://marvelous-project-3.s3.us-east-2.amazonaws.com/shang-chi.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src="https://marvelous-project-3.s3.us-east-2.amazonaws.com/shang-chi.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default FeaturedCharacters;
