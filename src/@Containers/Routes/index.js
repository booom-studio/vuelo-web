import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import SignIn from '@Containers/SignIn';
import Calendar from '@Containers/Calendar';
import Projects from '@Containers/Projects';

import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Switch>
    <PrivateRoute path="/" exact render={() => <Redirect to="/calendar" />} />
    <PrivateRoute path="/calendar" component={Calendar} />
    <PrivateRoute path="/projects" component={Projects} />
    <Route path="/sign-in" component={SignIn} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
