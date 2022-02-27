import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// COMPONENT IMPORTS //
import Footer from './components/Footer';
import Search from './components/Search';
import FeaturedHero from './components/FeaturedHero';
import HeroSearch from './pages/HeroSearch';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

/// BACK-END LINK TO FRONT-END ///
const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

/// App Setup ///
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          {/* NavBar location */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/search" component={HeroSearch} />
          </Switch>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
