const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const HeroSchema = new Schema(
  {
    index: {
      type: Number,
      required: true,
    },
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
