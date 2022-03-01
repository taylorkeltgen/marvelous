import React, { useState } from "react";
import SingleHero from "../components/SingleHero";
import axios from "axios";
import { useParams } from "react-router-dom";

const HeroPage = () => {
	const [character, setCharacter] = useState();
	const { id } = useParams();
	// declaring variables needed for an API call as per Marvel documentation
	const md5 = require("md5");
	const privateKey = "7c102ae9dfa5e000b24a379d896608a72aab9b71";
	const publicKey = "22a7456573deb77de2473e3e16a78271";
	const ts = new Date().getTime();
	const stringToHash = ts + privateKey + publicKey;
	const token = md5(stringToHash);
	const BASE_URL =
		"https://gateway.marvel.com:443/v1/public/characters?id=" + id;
	const testUrl =
		BASE_URL + "&ts=" + ts + "&apikey=" + publicKey + "&hash=" + token;

	// making API call using axios
	axios.get(`${testUrl}`).then((response) => {
		console.log(response.data.data);
		setCharacter(response.data.data.results);
	});

	return (
		<div>
			<SingleHero HeroData={character} />
		</div>
	);
};

export default HeroPage;
