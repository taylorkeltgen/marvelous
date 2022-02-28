import React from 'react'

const Comments = ({comments}) => {
    // if (!hero.length) {
    //     return <h3>No Comments Yet</h3>;
    //   }
console.log(comments)
  return (
    <div>
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
    </div>
  )
}

export default Comments