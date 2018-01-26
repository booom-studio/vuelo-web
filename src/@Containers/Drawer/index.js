import { connect } from 'react-redux';

import { openDrawer, closeDrawer } from 'dux/actions';

import Drawer from './Drawer';

const mapStateToProps = ({ drawerOpen }) => ({
  open: drawerOpen
});

const mapDispatchToProps = { closeDrawer };

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
