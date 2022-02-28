import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_HERO } from '../utils/queries';
// import Comments from '../components/Comments';

// const heroIndex = '621c386fe5cd9311eecdae7b'

const Spotlight = () => {
    // use useQuery hook to make query request
    const { loading, error, data } = useQuery(QUERY_HERO, {
    variables: { index: 1 },
    });
    const {hero} = data || {};
    console.log(data)
    // const {comment} = hero.comments;
    // console.log(comment)

    if (loading) {
    return <div>Loading...</div>;
    }

  return (
    <div>
        <div className="card">
            <div className="hero-card-container">
            <div className="card-body">
                <h3>Spotlight Hero</h3>
                <h2 className="hero-name">{hero.name}</h2>
                <div className="hero-card">
                <p className="secondary-text">Bio:</p>
                <p className="secondary-text">{hero.bio}</p>
                </div>
            </div>
            <div className="hero-image card-body">
                <img src={hero.image} alt={hero.name} className="card-img-top" />
            </div>
            <div className="hero-trivia">
                <p>{hero.trivia}</p>
            </div>
            </div>
        </div>
        {/* <div>
            {hero &&
                hero.map(comment => (
                <div key={comment._id} className="card mb-3">
                    <p className="card-header">
                    comment on {comment.createdAt}
                    </p>
                    <div className="card-body">
                        <p>{comment.commentText}</p>
                    </div>
                </div>
                ))}
        </div> */}
    </div>
  )
};

export default Spotlight;
