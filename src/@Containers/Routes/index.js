import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import SignIn from '@Containers/SignIn';
import Timer from '@Containers/Timer';

import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Switch>
    <PrivateRoute path="/" exact render={() => <Redirect to="/timer" />} />
    <PrivateRoute path="/timer" component={Timer} />
    <Route path="/sign-in" component={SignIn} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
