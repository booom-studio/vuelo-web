import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignIn from 'react-google-login';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = ({ palette, spacing, shadows }) => ({
  button: {
    padding: 0,
    width: '100%',
    background: '#d14836',
    boxShadow: shadows[1],
    color: palette.common.darkWhite,
    '&:hover': {
      background: '#a63526'
    }
  },
  innerButton: {
    padding: spacing.unit,
    flex: 1
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
      <Button raised className={classes.button}>
        <SignIn
          tag="div"
          className={classes.innerButton}
          clientId={clientId}
          onSuccess={this.success}
          onFailure={this.failure}
          buttonText="Sign In with Google"
        />
      </Button>
    );
  }
}

export default withStyles(styles)(GoogleSignIn);
