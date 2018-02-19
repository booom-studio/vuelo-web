import React, { Component } from 'react';
import PropTypes from 'prop-types';

import sample from 'lodash.sample';

import { withStyles } from 'material-ui/styles';

import GoogleSignIn from './GoogleSignIn';

const styles = ({ palette: { projectColors } }) => {
  return {
    container: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: sample(projectColors)
    }
  };
};

class SignIn extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    signInSimple: PropTypes.func.isRequired,
    signedIn: PropTypes.bool.isRequired,
    signIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  state = {
    email: '',
    password: ''
  };

  componentWillReceiveProps(nextProps) {
    const { history, signedIn } = nextProps;

    if (signedIn) {
      history.push('/');
    }
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <GoogleSignIn />
      </div>
    );
  }
}

export default withStyles(styles)(SignIn);
