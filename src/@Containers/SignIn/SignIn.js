import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

import GoogleSignIn from './GoogleSignIn';

const styles = ({ palette, spacing }) => {
  return {
    container: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    card: {
      width: 300,
      flexDirection: 'column'
    },
    cardContent: {
      paddingTop: 0
    },
    title: {
      padding: spacing.unit * 2,
      background: palette.grey.A100,
      color: palette.text.secondary,
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    button: {
      width: '100%',
      margin: `${spacing.unit * 2}px 0`
    },
    link: {
      color: 'inherit',
      textDecoration: 'inherit',
      '&:hover': {
        textDecoration: 'underline'
      },
      display: 'inline-block'
    },
    divider: {
      margin: `${spacing.unit * 2}px 0`
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

  handleChange = field => ({ target: { value } }) => {
    this.setState({ [field]: value });
  };

  send = async evt => {
    const { signIn, signInSimple, history, location } = this.props;
    const { email, password } = this.state;

    evt.preventDefault();
    const { user, token } = await signInSimple({ email, password });

    await signIn({ user, token });

    history.push(location.state.from.pathname);
  };

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;

    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <Typography className={classes.title} type="button">
            Sign in
          </Typography>
          <CardContent className={classes.cardContent}>
            <form action="" onSubmit={this.send}>
              <TextField
                id="email"
                type="email"
                label="E-mail address"
                className={classes.textField}
                value={email}
                onChange={this.handleChange('email')}
                margin="dense"
                fullWidth
              />
              <TextField
                id="password"
                type="password"
                label="Password"
                className={classes.textField}
                value={password}
                onChange={this.handleChange('password')}
                margin="dense"
                fullWidth
              />
              <Button
                className={classes.button}
                disabled={!email || !password}
                raised
                color="primary"
                type="submit"
              >
                Sign in with Email
              </Button>
              <Typography type="caption">
                <a className={classes.link} href="#forgot-pw">
                  Forgot your password?
                </a>
              </Typography>
            </form>
            <Divider className={classes.divider} />
            <GoogleSignIn />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(SignIn);
