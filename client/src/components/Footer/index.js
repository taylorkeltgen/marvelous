import React from "react";
import "./index.css";
import github from "../../assets/github-11-32.png";
import marvel from "../../assets/marvel-logo.png";

export default function Footer() {
  return (
    <div classname="container">
      <footer className="row p-4">
        <div className="col-9">
          <p>
            Data provided by Marvel. &copy;{new Date().getFullYear()} Marvel
          </p>
          <p>
            Created by Kevin Aboy, Bryan Acosta, Sabrina <br /> Elkins, Taylor
            Keltgen, Zak Krutikov
          </p>
        </div>
        <div className="col-3 links">
          <p>LINKS</p>
          <a href="https://github.com/taylorkeltgen/marvelous">
            <img src={github}></img>
          </a>
          <a href="https://developer.marvel.com/">
            <img src={marvel} className="marvel-logo"></img>
          </a>
        </div>
      </footer>
    </div>
  );
}
