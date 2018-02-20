import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

import ProjectTitle from '@Components/ProjectTitle';

const DrawerView = ({
  classes,
  open,
  projects,
  onDrawerToggleClick,
  onCreateProjectClick,
  onProjectClick
}) => (
  <Drawer
    variant="permanent"
    open={open}
    classes={{
      paper: cx(classes.drawer, { [classes.drawerOpened]: open })
    }}
  >
    <div>
      <IconButton className={classes.button} onClick={onCreateProjectClick}>
        <Icon>add</Icon>
      </IconButton>
      {projects.map(({ id, title, color }) => (
        <ProjectTitle
          key={id}
          open={open}
          onClick={() => onProjectClick(id)}
          title={title}
          color={color}
        />
      ))}
    </div>
    <IconButton
      className={cx(classes.button, classes.toggleDrawer)}
      onClick={onDrawerToggleClick}
    >
      <Icon>{open ? 'chevron_left' : 'chevron_right'}</Icon>
    </IconButton>
  </Drawer>
);

DrawerView.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  projects: PropTypes.array.isRequired,
  onDrawerToggleClick: PropTypes.func,
  onCreateProjectClick: PropTypes.func,
  onProjectClick: PropTypes.func
};

export default DrawerView;
