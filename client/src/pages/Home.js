import React from 'react';
import FeaturedCharacters from '../components/FeaturedCharacters';
import FeaturedHero from '../components/FeaturedHero/FeaturedHero';

const Home = () => {
  return (
    <>
      <FeaturedHero />
      <FeaturedCharacters />
    </>
  );
};

export default Home;
