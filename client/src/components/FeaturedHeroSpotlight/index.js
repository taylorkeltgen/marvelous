import React from 'react'

const FeaturedHero = ({heroData}) => {
  return (
    <div>
        <div key={heroData.id} className="card">
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
                        <img
                            src={heroData.image}
                            alt={heroData.name}
                            className="card-img-top"
                        />
                    </div>
                    <div className='hero-trivia'>
                        <p>Did you know..?</p>
                        <p>{heroData.trivia}</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedHero