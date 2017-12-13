import { connect } from 'react-redux';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { initialize, signIn, signOut } from 'dux/actions';
import App from './App';

const refreshToken = graphql(
  gql`
    mutation($oldToken: String!) {
      refreshToken(oldToken: $oldToken) {
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
      refreshToken: oldToken =>
        mutate({ variables: { oldToken } }).then(
          ({ data: { refreshToken } }) => refreshToken
        )
    })
  }
);

const mapStateToProps = ({ initialized, user, signedIn }) => ({
  initialized,
  user,
  signedIn
});

const mapDispatchToProps = {
  initialize,
  signIn,
  signOut
};

export default compose(
  refreshToken,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
