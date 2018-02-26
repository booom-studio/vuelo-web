import { connect } from 'react-redux';
import { compose } from 'react-apollo';

import { openDrawer } from '@dux/actions';
import { setCubeId, cubeInfo } from '@dux/queries';

import Drawer from './Settings';

const mapStateToProps = ({ isDrawerOpen }) => ({
  isDrawerOpen
});

const mapDispatchToProps = {
  openDrawer
};

export default compose(
  setCubeId,
  cubeInfo,
  connect(mapStateToProps, mapDispatchToProps)
)(Drawer);
