const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Comment {
    _id: ID
    featuredHero: ID
    commentText: String
    createdAt: String
    username: String
    likeCount: Int
  }

  type Hero {
    _id: ID
    bio: String
    stats: String
    trivia: String
    image: String
    comments: [Comment]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
    heros: [Hero]
    hero(_id: ID!): Hero
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentText: String!): Comment
  }
`;

module.exports = typeDefs;
