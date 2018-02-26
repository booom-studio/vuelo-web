import { connect } from 'react-redux';
import { compose } from 'react-apollo';

import { openDrawer, closeDrawer, selectProject } from '@dux/actions';
import { projects, createProject, colors } from '@dux/queries';

import Drawer from './Drawer';

const mapStateToProps = ({ isDrawerOpen }) => ({
  open: isDrawerOpen
});

const mapDispatchToProps = {
  openDrawer,
  closeDrawer,
  selectProject
};

export default compose(
  projects,
  createProject,
  colors,
  connect(mapStateToProps, mapDispatchToProps)
)(Drawer);
