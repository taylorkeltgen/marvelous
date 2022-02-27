import React from 'react';
// import { useQuery } from '@apollo/client';
// import { QUERY_HEROES } from '../utils/queries';

const HeroSpotlight = ({ heroData }) => {
  // use useQuery hook to make query request
  // const { loading, data } = useQuery(QUERY_HEROES);
  // const heroes = data?.heroes || [];
  // console.log(heroes);

  return (
    <div>
      {/* <div key={heroData.id} className="card">
        <div className="hero-card-container">
          <div className="card-body">
            <h3>Featured Hero</h3>
            <h2 className="hero-name">{heroData.name}</h2>
            <div className="hero-card">
              <p className="secondary-text">Bio:</p>
              <p className="secondary-text">{heroData.bio}</p>
            </div>
          </div>
          <div className="hero-image card-body">
            <img src={heroData.image} alt={heroData.name} className="card-img-top" />
          </div>
          <div className="hero-trivia">
            <p>Did you know..?</p>
            <p>{heroData.trivia}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSpotlight;
