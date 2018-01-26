import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import SignIn from '@Containers/SignIn';
import Routes from '@Containers/Routes';
import TopBar from '@Containers/TopBar';
import Drawer from '@Containers/Drawer';

import Loading from '@Components/Loading';

import { withStyles } from 'material-ui/styles';
import Themed from './Themed';

const styles = ({ breakpoints, palette }) => ({
  root: {
    width: '100%',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexGrow: 1,
    backgroundColor: palette.background.default,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    background: `url(${require('./doodles.png')}) right`,
    [breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64
    }
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
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <TopBar />
            <Drawer />
            <main className={classes.content}>{this.getContent()}</main>
          </div>
        </div>
      </Themed>
    );

    // return (
    //   <Themed>
    //     <div className={classes.container}>
    //       <TopBar />
    //       <Drawer />
    //       {this.getContent()}
    //     </div>
    //   </Themed>
    // );
  }
}

export default withStyles(styles)(App);
