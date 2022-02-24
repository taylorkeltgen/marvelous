const { Schema, model } = require('mongoose');

const CommentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: 'You need to leave a comment!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    likeCount: {
      type: Number,
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

commentSchema.virtual('likeCount').get(function() {
  return this.likeCount.length;
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;
