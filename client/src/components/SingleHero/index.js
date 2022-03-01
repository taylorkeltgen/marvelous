import React, { useState, useEffect } from "react";
import axios from "axios";

// API Call through URL params
const SingleHero = () => {
	const [character, setCharacter] = useState({});
	const queryParams = new URLSearchParams(window.location.search);
	const id = queryParams.get("id");
	// declaring variables needed for an API call as per Marvel documentation
	const md5 = require("md5");
	const privateKey = "f0b9f04ae0e902fb5e6e3072b6a0f44efd6f2b02";
	const publicKey = "e6ab680f2e52f24d5817b4a301f88e41";
	const ts = new Date().getTime();
	const stringToHash = ts + privateKey + publicKey;
	const token = md5(stringToHash);
	const BASE_URL =
		"https://gateway.marvel.com:443/v1/public/characters?id=" + id;
	const testUrl =
		BASE_URL + "&ts=" + ts + "&apikey=" + publicKey + "&hash=" + token;
	//making API call using axios
	axios.get(`${testUrl}`).then((res) => {
		const chardata = res.data.data.results[0];
		setCharacter(chardata);
	});
	return (
		<div>
			<h1>{character.name}</h1>
			<h1>{character.description}</h1>
		</div>
	);
};

export default SingleHero;
