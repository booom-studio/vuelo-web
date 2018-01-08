import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import SignIn from '@Containers/SignIn';
import Routes from '@Containers/Routes';
import TopBar from '@Containers/TopBar';

import Loading from '@Components/Loading';

import { withStyles } from 'material-ui/styles';
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
    const { initialized } = this.props;

    if (!initialized) {
      return <Loading />;
    }

    return <Routes />;
  };

  render() {
    const { classes } = this.props;

    return (
      <Themed>
        <div className={classes.container}>
          <TopBar />
          {this.getContent()}
        </div>
      </Themed>
    );
  }
}

export default withStyles(styles)(App);
