const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const CommentSchema = new Schema(
  {
    // featuredHero: {
    //   type: String,
    //   required: true,
    // },
    commentText: {
      type: String,
      required: 'You need to leave a comment!',
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

CommentSchema.virtual('likedCount').get(function () {
  return this.likeCount.length;
});

module.exports = CommentSchema;
