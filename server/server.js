const express = require('express');
const { assertValidExecutionArguments } = require('graphql/execution/execute');
require('dotenv').config();
//const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const md5 = require('md5');
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;
const axios = require('axios').default;
const timeStamp = new Date().getTime();
const token = md5(timeStamp, privateKey, publicKey);
const BASE_URL = 'https://gateway.marvel.com/v1/public/';
const testUrl = `https://gateway.marvel.com/v1/public/characters/ts=${timeStamp}&apikey=${publicKey}&hash=${token}`;

// const { typeDefs, resolvers } = require('./schemas');
// const { authMiddleware } = require('./utils/auth');
// const db = require('./config/connection');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.get('/',async (req, res) => {
 let result = await axios.get(testUrl)
 .then (function (res) {
  res.json(result);
 });
})

// const startServer = async () => {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware,
//   });
//   await server.start();
//   server.applyMiddleware({ app });
//   console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
// };

// startServer();



// Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//   });
// });
