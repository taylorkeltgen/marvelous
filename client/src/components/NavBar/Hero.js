import React from 'react';

function Hero({hero}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br-100 h3 w3 dib" alt={hero.name} src={process.env.PUBLIC_URL + hero.imgPath} />
      <div>
        <h2>{hero.name}</h2>
      </div>
    </div>
  );
}

export default Hero;