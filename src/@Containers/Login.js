import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const CLIENT_ID =
  '645715169329-kgminegvl9qd88g1e2b36a5j1phkqsf6.apps.googleusercontent.com';

class Login extends Component {
  static propTypes = {
    mutate: PropTypes.func
  };

  success = async ({ tokenId }) => {
    const resp = await this.props.mutate({ variables: { token: tokenId } });

    const { data: { signInGoogle: { token } } } = resp;
    localStorage.setItem('token', token);
  };

  failure = error => {
    console.log('fail', error);
  };

  render() {
    return (
      <GoogleLogin
        clientId={CLIENT_ID}
        onSuccess={this.success}
        onFailure={this.failure}
      />
    );
  }
}

const signIn = gql`
  mutation($token: String!) {
    signInGoogle(token: $token) {
      token
      user {
        id
        name
      }
    }
  }
`;

export default graphql(signIn)(Login);
