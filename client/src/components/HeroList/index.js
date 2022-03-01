import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const HeroList = ({ heroDatalist }) => {
	// if (!heroDatalist.length) {
	// 	return <h3>No Heros Yet</h3>;
	// }
	return (
		<div className="row justify-content-space-between">
			{heroDatalist &&
				heroDatalist.map((heroData) => (
					<div key={heroData.id} className="card hero border-0">
						<div className="hero-card-container">
							<Link
								to={`singlehero?heroid=${heroData.id}`}
								className="hero-link"
								style={{ textDecoration: "none" }}
							>
								<img
									src={`${heroData.thumbnail.path}.${heroData.thumbnail.extension}`}
									alt={heroData.name}
									className="card-img-top hero-img-top"
								/>
								<div className="card-body hero-body">
									<p className="hero-name">{heroData.name}</p>
								</div>
							</Link>
						</div>
					</div>
				))}
		</div>
	);
};

// view only card for css
// const HeroList = () => {
// 	return (
// 		<div className="card">
// 			<div className="hero-card-container">
// 				<img
// 					src="https://via.placeholder.com/250"
// 					alt="{heroData.name}"
// 					className="card-img-top"
// 				/>
// 				<div className="card-body">
// 					<p className="hero-name">HERO NAME</p>
// 					<div className="hero-card-footer">
// 						<p className="secondary-text">actor name</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export default HeroList;
