import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_HEROES = gql`
  query heroes {
    heroes {
      _id
      name
      bio
      trivia
      image
      comments {
        _id
        commentText
        createdAt
        username
        likeCount
      }
    }
  }
`;

export const QUERY_HERO = gql`
  query hero($id: ID!) {
    hero(_id: $id) {
      name
      bio
      trivia
      image
      comments {
        _id
        commentText
        createdAt
        username
        likeCount
      }
    }
  }
`;
