import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignIn from 'react-google-login';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import icon from './google-32.png';

const styles = ({ palette, spacing }) => ({
  button: {
    padding: spacing.unit,
    color: palette.common.black,
    boxShadow: 'none',
    border: '1px solid black'
  },
  icon: {
    width: 12,
    height: 12,
    objectFit: 'contain'
  },
  innerButton: {
    flex: 1,
    paddingRight: spacing.unit / 2
  }
});

class GoogleSignIn extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    clientId: PropTypes.string.isRequired,
    signInGoogle: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  };

  success = async ({ tokenId }) => {
    const { signInGoogle, signIn } = this.props;
    const { user, token } = await signInGoogle(tokenId);

    await signIn({ user, token });
  };

  failure = () => {
    this.props.signOut();
  };

  render() {
    const { clientId, classes } = this.props;

    return (
      <Button className={classes.button}>
        <SignIn
          tag="div"
          className={classes.innerButton}
          clientId={clientId}
          onSuccess={this.success}
          onFailure={this.failure}
          buttonText="Sign In"
          // autoLoad
        />
        <img src={icon} className={classes.icon} alt="Google" />
      </Button>
    );
  }
}

export default withStyles(styles)(GoogleSignIn);
