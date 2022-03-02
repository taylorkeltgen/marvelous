import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, CardGroup, Form } from "react-bootstrap";
import HeroList from "../HeroList";
import axios from "axios";
import "./index.css";

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
			{/* <h1>Superhero Search</h1> */}
			<Form className="d-flex justify-content-center my-5">
				<input
					className="form-control-lg text-center px-5 mx-2"
					aria-label="search bar"
					type="text"
					placeholder="Enter a superhero name"
					value={search}
					onChange={handleInputChange}
				></input>
				<Button type="button" variant="danger" onClick={clicked}>
					Search
				</Button>
			</Form>
			<Container className="my-5">
				<CardGroup>
					<HeroList heroDatalist={character}></HeroList>
				</CardGroup>
			</Container>
		</Container>
	);
};

export default Search;
