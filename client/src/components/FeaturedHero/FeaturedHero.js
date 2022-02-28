import React from 'react';


function FeaturedHero(props) {
  return (
    <>
      {/* <h1 className="hp-featured-hero-name">Shang-Chi</h1>
      <h2 className="hp-featured-hero">Featured Hero</h2> */}
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://marvelous-project-3.s3.us-east-2.amazonaws.com/shang-chi.jpg" class="d-block w-100" alt="Shang-Chi comicbook art"></img>
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h2>Shang-Chi</h2>
            <h3><em>Featured Hero</em></h3>
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