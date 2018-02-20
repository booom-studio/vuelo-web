import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignIn from 'react-google-login';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import icon from './google-32.png';

const styles = ({ palette, spacing }) => ({
  button: {
    padding: 0,
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
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.unit
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
        >
          <Typography color="inherit" variant="button">
            Sign In
          </Typography>
          <img src={icon} className={classes.icon} alt="Google" />
        </SignIn>
      </Button>
    );
  }
}

export default withStyles(styles)(GoogleSignIn);
