// import React from 'react';
// import { useQuery } from '@apollo/client';
// import { QUERY_HEROES } from '../utils/queries';

// const HeroSpotlight = ({ heroData }) => {
//   // use useQuery hook to make query request
//   const { loading, data } = useQuery(QUERY_HEROES);
//   const heroes = data?.heroes || [];
//   console.log(heroes);

//   return (
//     <div>
//       <div className="card">
//         <div className="hero-card-container">
//           <div className="card-body">
//             <h3>Featured Hero</h3>
//             <h2 className="hero-name">hero name</h2>
//             <div className="hero-card">
//               <p className="secondary-text">Bio:</p>
//               <p className="secondary-text">bio</p>
//             </div>
//           </div>
//           <div className="hero-image card-body">
//             <img src="" alt="Hero Image" className="card-img-top" />
//           </div>
//           <div className="hero-trivia">
//             <p>Did you know..?</p>
//             <p>trivia</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSpotlight;
