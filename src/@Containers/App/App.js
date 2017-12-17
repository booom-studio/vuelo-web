import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SignIn from '@Containers/SignIn';
import Navigation from '@Containers/Navigation';

import Loading from '@Components/Loading';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Themed from './Themed';

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    background: `url(${require('./doodles.png')})`
  }
});

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
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

  getContent = () => {
    const { initialized, signedIn, user } = this.props;

    if (!initialized) {
      return <Loading />;
    }

    if (signedIn && user) {
      return (
        <React.Fragment>
          <Typography type="headline">Hello {user.name}</Typography>
        </React.Fragment>
      );
    }

    return <SignIn />;
  };

  render() {
    const { classes } = this.props;

    return (
      <Themed>
        <div className={classes.container}>
          <Navigation />
          {this.getContent()}
        </div>
      </Themed>
    );
  }
}

export default withStyles(styles)(App);
