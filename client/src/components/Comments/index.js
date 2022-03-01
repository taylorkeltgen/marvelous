// import React from 'react';
// import { useQuery } from '@apollo/client';
// import { QUERY_HERO } from '../../utils/queries';

// const Comments = (props) => {
//   const { loading, data } = useQuery(QUERY_HERO, {
//     variables: { index: props },
//   });
//   const { hero } = data || {};
//   console.log(hero);
//   const commentData = props.comments;
//   console.log(commentData);
//   // if (loading) {
//   //   return <div>Loading...</div>;
//   //   }

//   return (
//     <div>
//       {commentData &&
//         commentData.map((comment) => (
//           <div key={comment._id} className="card mb-3">
//             <p className="card-header">
//               {comment.username} commented on {comment.createdAt}
//             </p>
//             <div className="card-body">
//               <p>{comment.commentText}</p>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Comments;
