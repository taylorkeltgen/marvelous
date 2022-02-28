import React from 'react';
import Card from './Hero';

function Search({ filteredHero }) {
  const filtered = filteredHero.map(hero =>  <Card key={hero.id} person={hero} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default Search;
