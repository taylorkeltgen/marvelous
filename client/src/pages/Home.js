import React from 'react';
import FeaturedCharacters from '../components/FeaturedCharacters';
import FeaturedHero from '../components/FeaturedHero/FeaturedHero';
// import React, { Component } from 'react'

// export default class Home extends Component {
//     render () {
//         return (
//             <div>
//                 <h1>Home</h1>
//             </div>
//         )
//     }
// }
// import React from 'react';

const Home = () => {
  return (
    <>
      <FeaturedHero />
      <FeaturedCharacters />
    </>
  );
};

export default Home;
