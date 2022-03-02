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
					<p>...comic book lovers, movie fans, and newcomers!</p>
					<p>Each week we introduce a new character.</p>
					<p>
						Want more selections? Search through the entire Marvel API database
						<br />
						to learn about your favorite comic book superheroes and villains.
					</p>
					<Link to="/spotlight" style={{ textDecoration: "none" }}>
						<Button variant="light">View featured hero</Button>{" "}
					</Link>
					<Link to="/search" style={{ textDecoration: "none" }}>
						<Button variant="danger mx-2">Search Heroes</Button>{" "}
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
