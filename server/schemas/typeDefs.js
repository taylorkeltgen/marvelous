const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Hero {
    _id: ID
    name: String
    bio: String
    trivia: String
    image: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
    likeCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    heroes: [Hero]
    hero(_id: ID!): Hero
    comments: [Comment]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addHero(name: String!, bio: String!, trivia: String!, image: String!): Hero
    addComment(featuredHeroId: ID!, commentText: String!): Hero
    deleteComment(heroId: ID!, commentId: ID!): Hero
  }
`;

module.exports = typeDefs;
