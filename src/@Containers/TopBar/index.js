import { connect } from 'react-redux';

import { signOut, openDrawer, closeDrawer } from 'dux/actions';

import TopBar from './TopBar';

const mapStateToProps = ({ user, signedIn, drawerOpen }) => ({
  user,
  signedIn,
  drawerOpen
});

const mapDispatchToProps = {
  signOut,
  openDrawer,
  closeDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
