const { AuthenticationError } = require('apollo-server-express');
const { User, Hero } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Check is User is Logged In
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    // Find All Users
    users: async () => {
      return User.find().select('-__v -password');
    },
    // Find One User
    user: async (parent, { username }) => {
      return User.findOne({ username }).select('-__v -password');
    },
    heroes: async () => {
      return Hero.find();
    },
    hero: async (parent, { index }) => {
      console.log('Query ran..!');
      return Hero.findOne({ index });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);

      return { token, user };
    },

    addHero: async (parent, args) => {
      const hero = await Hero.create(args);
      return hero;
    },

    addComment: async (parent, { index, commentText }, context) => {
      if (context.user) {
        const comment = await Hero.findOneAndUpdate(
          { index },
          { $push: { comments: { commentText, username: context.user.username } } },
          { new: true }
        );
        return comment;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { index, commentId }, context) => {
      if (context.user) {
        const comment = await Hero.findOneAndUpdate({ index }, { $pull: { comments: { _id: commentId } } }, { new: true });
        return comment;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeHero: async (parent, { heroIndex }, context) => {
      if (context.user) {
        const hero = await Hero.deleteOne({ where: { _id: { _eq: heroIndex } } }, { new: true });
        return hero;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
