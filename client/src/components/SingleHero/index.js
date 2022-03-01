import React from "react";
import "./index.css";

const SingleHero = (HeroData) => {
	return (
		<div>
			<h1>{HeroData.name}</h1>
			<h1>{HeroData.id}</h1>
		</div>
	);
};

export default SingleHero;
