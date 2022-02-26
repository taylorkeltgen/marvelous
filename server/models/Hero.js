const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const { CommentSchema } = require(__dirname + '/Comment.js').schema;
const HeroSchema = new Schema(
  {
    name: {
      type: String,
    },
    bio: {
      type: String,
    },
    trivia: {
      type: String,
    },
    image: {
      type: String,
    },
    comments: [commentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// HeroSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

const Hero = model('Hero', HeroSchema);

module.exports = Hero;
