import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './PrivateRoute';

export default () => (
  <Router>
    <Switch>
      <Route path='/login' component={LoginPage} />
      <PrivateRoute path='/' component={HomePage} />
    </Switch>
  </Router>
  // <div>
  // </div>
  // <LoginPage />
);
