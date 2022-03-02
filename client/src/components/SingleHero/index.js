import React from "react";

const SingleHero = (props) => {
	const hero = props.HeroData;
	const image = `${props.HeroImage.path}/landscape_incredible.${props.HeroImage.extension}`;
	console.log(hero);
	console.log(image);

	return (
		<div>
			<h1>{hero.name}</h1>
			<img src={image} alt={hero.name} />
		</div>
	);
};

export default SingleHero;
