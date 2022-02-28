import React, { Component } from 'react';
import PropTypes from 'prop-types';

function FeaturedHero(props) {
  return (
    <>
      <h1>Shang-Chi</h1>
      <h2>Featured Hero</h2>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://marvelous-project-3.s3.us-east-2.amazonaws.com/shang-chi.jpg" class="d-block w-100" alt="Shang-Chi comicbook art"></img>
          </div>
          {/* <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div> */}
        </div>
      </div>
    </>
  );
}

export default FeaturedHero;