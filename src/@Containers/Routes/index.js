import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import SignIn from '@Containers/SignIn';
import Calendar from '@Containers/Calendar';

import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Router>
    <Switch>
      <PrivateRoute path="/" exact render={() => <Redirect to="/calendar" />} />
      <PrivateRoute path="/calendar" component={Calendar} />
      <Route path="/sign-in" component={SignIn} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </Router>
);

export default Routes;
