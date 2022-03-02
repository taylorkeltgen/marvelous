import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const SingleHero = (props) => {
	const hero = props.HeroData;
	const image = `${props.HeroImage.path}/standard_fantastic.${props.HeroImage.extension}`;
	console.log(hero);
	console.log(image);

	return (
		<Container fluid>
			<Row className="justify-content-md-center">
				<Col md="auto">
					<Card style={{ width: "25rem" }}>
						<Card.Img variant="top" src={image} alt={hero.name} />
						<Card.Body>
							<Card.Title>{hero.name}</Card.Title>
							<Card.Text>{hero.description}</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default SingleHero;
