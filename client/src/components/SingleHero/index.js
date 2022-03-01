import React from "react";

const SingleHero = (HeroData) => {
	const Hero = HeroData.HeroData;
	return (
		<div>
			<h1>{Hero.name}</h1>
		</div>
	);
};

export default SingleHero;
