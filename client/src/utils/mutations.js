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
  mutation addComment($featuredHeroId: ID!, $commentText: String!) {
    addComment(featuredHeroId: $featuredHeroId, commentText: $commentText) {
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

export const REMOVE_COMMENT = gql`
  mutation removeComment($id: ID!) {
    removeComment(id: $id) {
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
