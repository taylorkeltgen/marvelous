import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Image, Row, Col } from "react-bootstrap";

const Home = () => {
	return (
		<Container fluid style={{ height: "700px" }} className="homecontainer">
			<Row
				style={{
					alignItems: "center",
				}}
			>
				<Col>
					<h1>Welcome to Marvelous</h1>
					<p>for comic book lovers</p>
					<Link to="/spotlight" style={{ textDecoration: "none" }}>
						<Button variant="secondary">View featured hero</Button>{" "}
					</Link>
					<Link to="/search" style={{ textDecoration: "none" }}>
						<Button variant="danger">Search Heros</Button>{" "}
					</Link>
				</Col>
				<Col className="comic-strip-container">
					<Image
						className="comic-strip"
						src=" https://marvelous-project-3.s3.us-east-2.amazonaws.com/marvel-comic-strip.png"
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
