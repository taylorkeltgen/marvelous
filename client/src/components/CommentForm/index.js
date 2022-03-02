import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";
import { Container } from 'react-bootstrap';

const CommentForm = (props) => {
	const [commentText, setText] = useState("");
	const [addComment, { error }] = useMutation(ADD_COMMENT);

	const index = props.hero.index;

	// update state based on form input changes
	const handleChange = (event) => {
		if (event.target.value.length <= 280) {
			setText(event.target.value);
		}
	};

	// Comment submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(commentText);
		try {
			await addComment({
				variables: { index, commentText },
			});
			// clear form value on Submit
			setText("");
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div>
			<form
				className=" card text-white bg-dark justify-content-center justify-space-between-md p-2"
				onSubmit={handleFormSubmit}
			>
				<label className="page-title p-2">Share your thoughts!</label>
				<input
					className="form-input col-12"
					placeholder="Add a comment..."
					value={commentText}
					onChange={handleChange}
				/>
<Container>
				<button className="btn btn-danger col-12 col-md-3 mt-2" type="submit">
					Comment
				</button>
				</Container>
			</form>

			{error && <div>Something went wrong...</div>}
		</div>
	);
};

export default CommentForm;
