import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_HERO = gql`
  mutation addHero($name: String!, $bio: String!, $trivia: String!, $image: String!) {
    addHero(name: $name, bio: $bio, trivia: $trivia, image: $image) {
      _id
      name
      bio
      trivia
      image
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($index: Int!, $commentText: String!) {
    addComment(index: $index, commentText: $commentText) {
      _id
      index
      name
      comments {
        _id
        commentText
        createdAt
        username
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($index: Int!, $commentId: ID!) {
    removeComment(index: $index, commentId: $commentId) {
      _id
      index
      name
      comments {
        _id
        commentText
        createdAt
        username
      }
    }
  }
`;

export const REMOVE_HERO = gql`
  mutation removeHero($id: ID!) {
    removeHero(id: $id) {
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
      }
    }
  }
`;
