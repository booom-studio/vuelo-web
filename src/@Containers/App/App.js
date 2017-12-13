import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Login from '@Containers/Login';

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
    const { initialized, signedIn, signOut, user } = this.props;

    if (!initialized) {
      return <h1>Loading...</h1>;
    }

    if (signedIn && user) {
      return (
        <div>
          <button onClick={signOut}>Sign out</button>
          <img src={user.picture} alt="wow" />
        </div>
      );
    }

    return <Login />;
  }
}

export default App;
