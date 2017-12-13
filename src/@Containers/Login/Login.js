import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';

const CLIENT_ID =
  '645715169329-kgminegvl9qd88g1e2b36a5j1phkqsf6.apps.googleusercontent.com';

export default class Login extends Component {
  static propTypes = {
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
    return (
      <div>
        <GoogleLogin
          clientId={CLIENT_ID}
          onSuccess={this.success}
          onFailure={this.failure}
        />
      </div>
    );
  }
}
