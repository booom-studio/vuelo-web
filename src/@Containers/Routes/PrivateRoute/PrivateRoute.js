import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  signedIn,
  component,
  render,
  redirectTo = '/sign-in',
  ...rest
}) => {
  if (signedIn) {
    return <Route {...rest} component={component} render={render} />;
  } else {
    return (
      <Route
        {...rest}
        render={({ location }) => (
          <Redirect
            push
            to={{
              pathname: redirectTo,
              state: { from: location, referrer: location }
            }}
          />
        )}
      />
    );
  }
};

PrivateRoute.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  component: PropTypes.func,
  render: PropTypes.func,
  redirectTo: PropTypes.string
};

export default PrivateRoute;
