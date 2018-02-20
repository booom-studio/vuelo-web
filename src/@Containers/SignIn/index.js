import { connect } from 'react-redux';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { signIn, signOut } from '@dux/actions';
import SignIn from './SignIn';

const signInGoogle = graphql(
  gql`
    mutation($email: String!, $password: String!) {
      signIn(email: $email, password: $password) {
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
      signInSimple: ({ email, password }) =>
        mutate({ variables: { email, password } }).then(
          ({ data: { signIn } }) => signIn
        )
    })
  }
);

const mapStateToProps = ({ signedIn }) => ({
  signedIn
});

const mapDispatchToProps = {
  signIn,
  signOut
};

export default compose(
  signInGoogle,
  connect(mapStateToProps, mapDispatchToProps)
)(SignIn);
