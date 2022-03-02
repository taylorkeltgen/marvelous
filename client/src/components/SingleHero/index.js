import React from "react";

const SingleHero = (HeroData) => {
  const Hero = HeroData.HeroData;
  console.log('inside single hero');
  console.log(HeroData);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default SingleHero;
