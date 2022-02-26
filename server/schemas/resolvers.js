const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Hero } = require('../models');
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
    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    comment: async (parent, { _id }) => {
      return Comment.findOne({ _id });
    },
    heros: async () => {
      return Hero.find();
    },
    hero: async (parent, { _id }) => {
      return Hero.findOne({ _id });
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

    // NOT Completed ////////////////////
    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate({ _id: context.user._id }, { $push: { comments: comment._id } }, { new: true });

        return comment;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // addComment: async (parent, { commentId, commentText }, context) => {
    //   if (context.user) {
    //     const updatedThought = await Thought.findOneAndUpdate(
    //       { _id: thoughtId },
    //       { $push: { reactions: { reactionBody, username: context.user.username } } },
    //       { new: true, runValidators: true }
    //     );

    //     return updatedThought;
    //   }

    //   throw new AuthenticationError('You need to be logged in!');
    // },

    // NEED Adding ////////////////////
    editComment: async (parent, args, context) => { },
    deleteComment: async (parent, args, context) => { },
  },
};

module.exports = resolvers;
