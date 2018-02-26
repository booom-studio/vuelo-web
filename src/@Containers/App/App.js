import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '@Containers/Routes';
import Drawer from '@Containers/Drawer';
import Theme from '@Containers/Theme';

import Loading from '@Components/Loading';

import { withStyles } from 'material-ui/styles';

const styles = () => ({
  root: {
    height: '100vh',
    display: 'flex'
  },
  content: {
    display: 'flex',
    flexGrow: 1
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
    const { classes, signedIn } = this.props;

    return (
      <Router>
        <Theme>
          <div className={classes.root}>
            {signedIn && <Drawer />}
            <main className={classes.content}>{this.getContent()}</main>
          </div>
        </Theme>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
