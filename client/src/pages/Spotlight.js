import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_HERO } from "../utils/queries";
import CommentForm from "../components/CommentForm";
import Auth from "../utils/auth";

// Manual switch between Heroes via INDEX NUMBER [ 1, 2, 3, 4, 5 ]
const i = 4;
const Spotlight = (prop) => {
	// use useQuery hook to make query request
	const { loading, data } = useQuery(QUERY_HERO, { variables: { index: i } });
	const { hero } = data || {};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<div className="d-flex spotlight-container ">
				<div className="col-12 col-md-6 spotlight-left-container text-center">
					<h3 className="spotlight-title">SPOTLIGHT HERO</h3>
					<h1 className="spotlight-name">{hero.name}</h1>
					<div className="mb-5 d-flex">
						<div className="bio-container card text-white bg-dark p-2 col">
							<h2 className="bio-title card-header page-title">Bio</h2>
							<p className="bio-text">{hero.bio}</p>
						</div>
						<div className="trivia-container card text-white bg-dark p-2 col">
							<div className="hero-trivia">
								<h2 className="card-header page-title">Trivia</h2>
								<p>{hero.trivia}</p>
							</div>
						</div>
					</div>
					{Auth.loggedIn() ? <CommentForm hero={hero} /> : <p></p>}
					<div className="comment-container ">
						{hero.comments &&
							hero.comments.map((comment) => (
								<div key={comment._id} className="card mt-3 text-white bg-dark">
									<p className="card-header">
										<span style={{ color: "red" }}>{comment.username}</span>{" "}
										commented on {comment.createdAt}
									</p>
									<div className="card-body">
										<p>{comment.commentText}</p>
									</div>
								</div>
							))}
					</div>
				</div>
				<div className="col">
					<img src={hero.image} alt={hero.name} className="card-img-top" />
				</div>
			</div>
		</div>
	);
};

export default Spotlight;
