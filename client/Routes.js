// - PACKAGES
import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// - COMPONENTS
import Login from './components/login/Login';
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import Theater from './components/theater/Theater.js';
import Profile from './components/profile/Profile.js'
import App from './App';

// - ROUTER
export default (
  <Router history={hashHistory}>
    <Route path="/login" component={Login} />
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/theater" component={Theater}/>
      <Route path="/profile" component={Profile}/>
    </Route>
  </Router>
);
