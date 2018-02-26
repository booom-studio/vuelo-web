import { connect } from 'react-redux';

import { compose } from 'react-apollo';

import { initialize, signIn, signOut } from '@dux/actions';
import { refreshToken } from '@dux/queries';
import App from './App';

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
