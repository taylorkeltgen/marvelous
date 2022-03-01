import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = (props) => {
  const [commentText, setText] = useState('');
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
      setText('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form className="flex-row justify-center justify-space-between-md align-stretch" onSubmit={handleFormSubmit}>
        <textarea placeholder="Add a comment..." value={commentText} className="form-input col-12 col-md-9" onChange={handleChange}></textarea>

        <button className="btn btn-primary col-12 col-md-3" type="submit">
          Comment
        </button>
      </form>

      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default CommentForm;
