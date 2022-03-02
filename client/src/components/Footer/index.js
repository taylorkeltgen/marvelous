import React from "react";
import "./index.css";
import github from "../../assets/images/github-11-32.png";
import marvel from "../../assets/images/marvel-logo.png";

function Footer() {
	return (
		<div className="footer">
			<footer className="d-flex p-4">
				<div className="col-9">
					<p>
						Data provided by Marvel. &copy;{new Date().getFullYear()} Marvel
					</p>
					<p>
						Created by Kevin Aboy, Bryan Acosta,
						<br /> Sabrina Elkins, Taylor Keltgen, Zak Krutikov
					</p>
				</div>
				<div className="col-3 links">
					<p>LINKS</p>
					<a href="https://github.com/taylorkeltgen/marvelous">
						<img src={github} alt="github repository"></img>
					</a>
					<a href="https://developer.marvel.com/">
						<img
							src={marvel}
							className="marvel-logo"
							alt="Marvel api documentation"
						></img>
					</a>
				</div>
			</footer>
		</div>
	);
}
export default Footer;
