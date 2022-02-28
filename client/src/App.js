import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// COMPONENT IMPORTS //
import Footer from './components/Footer';
import HeroSearch from './pages/HeroSearch';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Spotlight from './pages/Spotlight';

/// App Setup ///
function App() {
  return (
    <Router>
      <>
        {/* NavBar location */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={HeroSearch} />
          <Route exact path="/spotlight" component={Spotlight} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
