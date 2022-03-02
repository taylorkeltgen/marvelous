import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";

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

<<<<<<< HEAD
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
=======
  // Comment submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addComment({
        variables: { index, commentText },
      });
      // clear form value on Submit
      setText('');
    } catch (e) {
      console.error(e);
    }
  };
>>>>>>> ad315f1eebde7cab25b85901c6e43e39cba55b86

	return (
		<div>
			<form
				className=" card text-white bg-dark justify-center justify-space-between-md p-2"
				onSubmit={handleFormSubmit}
			>
				<label className="page-title p-2">Share your thoughts!</label>
				<input
					className="form-input col-12"
					placeholder="Add a comment..."
					value={commentText}
					onChange={handleChange}
				/>

				<button className="btn btn-danger col-12 col-md-3 mt-2" type="submit">
					Comment
				</button>
			</form>

			{error && <div>Something went wrong...</div>}
		</div>
	);
};

export default CommentForm;
