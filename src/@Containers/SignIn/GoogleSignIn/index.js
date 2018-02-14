import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import config from '@config';

import { signIn, signOut } from 'dux/actions';
import GoogleSignIn from './GoogleSignIn';

const { clientId } = config.google;

const signInGoogle = graphql(
  gql`
    mutation($token: String!) {
      signInGoogle(token: $token) {
        token
        user {
          id
          name
          email
          picture
        }
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      signInGoogle: token =>
        mutate({ variables: { token } }).then(
          ({ data: { signInGoogle } }) => signInGoogle
        )
    })
  }
);

// const mapStateToProps = ({ signedIn }) => ({
//   signedIn
// });

const mapDispatchToProps = {
  signIn,
  signOut
};

export default compose(
  signInGoogle,
  connect(() => ({ clientId }), mapDispatchToProps)
)(GoogleSignIn);
