import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const HeroList = ({ heroDatalist }) => {
	// if (!heroDatalist.length) {
	// 	return <h3>No Heros Yet</h3>;
	// }
	return (
		<div>
			{heroDatalist &&
				heroDatalist.map((heroData) => (
					<div key={heroData.id} className="card">
						<div className="hero-card-container">
							<Link to={`/characters/${heroData.name}`} className="hero-link">
								<img
									src={heroData.thumbnail}
									alt={heroData.name}
									className="card-img-top"
								/>
								<div className="card-body">
									<p className="hero-name">{heroData.name}</p>
									<div className="hero-card-footer">
										<p className="secondary-text">actor name</p>
									</div>
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
