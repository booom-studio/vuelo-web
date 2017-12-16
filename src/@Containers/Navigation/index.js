import { connect } from 'react-redux';

import { signOut } from 'dux/actions';

import Navigation from './Navigation';

const mapStateToProps = ({ user, signedIn }) => ({
  user,
  signedIn
});

const mapDispatchToProps = {
  signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
