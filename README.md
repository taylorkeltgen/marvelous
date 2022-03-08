# Marvelous

MARVELOUS is a web application for the use of Marvel movie and comic book fans, and just about anyone who wants to learn more about Marvel characters. The app features a search function that let's you explore various versions of a character. For example, type "spider-man" and receive 13 results to view from the [Marvel Comics API](https://developer.marvel.com/)! We also built a forum specifically for users to be able to comment and share their interest in the Marvel Universe. 

View website: [https://marvelous-mern.herokuapp.com/](https://marvelous-mern.herokuapp.com/)

## Table of Contents
  - [User Story](#user-story)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Developers](#developers)

## User Story
AS A USER I want to be able to use an app to search for my favorite Marvel superheroes and villains. 

I WANT TO be able to read about the specific characters and their abilities. 

I ALSO WANT TO create a profile so that I can leave comments underneath the characters information, along with the ability read other users comments as well. 

WHEN I AM DONE I would like to be able to log out of my account.


## Technologies
- Node.js, Express,js, GraphQL
- React.js
- NoSQL database, utilizing GraphQL, Mongoose, MongoDB, and Apollo
- Amazon Web Services S3 for storing image icons
- Deployed to Heroku with data

## Features

### Home page
![Home Page](client/src/assets/images/marvelous-homepage.png)

### Search page
![Search page](client/src/assets/images/marvelous-search.png)

### Spotlight Hero page with comments section
![Spotlight page](client/src/assets/images/marvelous-spotlight.png)

### Login page
![Spotlight page](client/src/assets/images/marvelous-login.png)

### Developers

- [Kevin Aboy](https://github.com/kevinaboy)
  - Designed webpage mockups and selected artwork
  - Enhanced search functionality
  - Styled Home, Search, and Search Result pages
  - Responsible for creating and storing images in AWS S3
  - Managed meetings
  - Updated ReadMe
- [Bryan Acosta](https://github.com/TheBryan-Acosta)
  - Styled Home, Login, Sign Up, Spotlight, Search page results/cards, and Footer
  - Created Components: Marvel API Single Hero & Page Marvel API Cards
- [Sabrina Elkins](https://github.com/sabrinaelkins)
  - Helped set up navigation bar and models
  - Helped minor styling for search page and website favicon
  - Wrote the concept and styling section of the presentation
  
- [Taylor Keltgen](https://github.com/taylorkeltgen/want-to-buy)
  - Setup MongoDB, GraphQL queries/mutations setup, seed file for deployment
  - Feature/Spotlight Hero page, Login/Signup pages setup, including functionality and logic
  Setup the initial repo and heroku application, linking it to database
  - Helped with various React components, like react-router, NavBar, and minor styling
  - Helped troubleshoot errors with various parts of the development

- [Zak Krutikov](https://github.com/zkrutikov)
  - API query setup with axios, Marvel API token hashing and implementation
  - Set up and tweaked various React components
  - Helped with styling and style tweaks

For educational purposes only.<br />Data provided by Marvel. ©2022 Marvel
