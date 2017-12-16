import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'typeface-roboto';

import Login from '@Containers/Login';
import Navigation from '@Containers/Navigation';

import Loading from '@Components/Loading';

import './style.css';

class App extends Component {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
    initialized: PropTypes.bool.isRequired,
    initialize: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
    refreshToken: PropTypes.func.isRequired,
    user: PropTypes.object
  };

  async componentDidMount() {
    const { initialize, signIn, signOut, refreshToken } = this.props;
    const oldToken = localStorage.getItem('token');

    if (oldToken) {
      try {
        const { user, token } = await refreshToken(oldToken);
        signIn({ user, token });
      } catch (err) {
        console.log(err);
        signOut();
      }
    }

    initialize();
  }

  render() {
    const { initialized, signedIn, user } = this.props;

    if (!initialized) {
      return <Loading />;
    }

    if (signedIn && user) {
      return (
        <div>
          <Navigation />
        </div>
      );
    }

    return <Login />;
  }
}

export default App;
