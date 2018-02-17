import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import cx from 'classnames';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ProjectTitle from '@Components/ProjectTitle';

const styles = ({ mixins, transitions, zIndex, drawerWidth }) => ({
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth
  },
  list: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...mixins.toolbar
  },
  drawerPaper: {
    zIndex: zIndex.drawer,
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 36,
    overflowY: 'visible',
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen
    })
  },
  button: {
    width: 36
  }
});

class MiniDrawer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    openDrawer: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
  };
  componentDidMount() {
    //this.projects = this.props.getProjects();
  }
  render() {
    const { open, classes = {}, openDrawer, closeDrawer, data: {allProjects: projects = []} } = this.props;
    console.log(projects);
    return (
      <Drawer
        type="permanent"
        open={open}
        classes={{
          paper: cx(classes.drawerPaper, { [classes.drawerPaperClose]: !open })
        }}
      > 
        <IconButton className={classes.button}> add </IconButton>
          {projects.map(project => (
            <ProjectTitle key={project.id} drawerOpen={open} {...project} />
          ))}
        <IconButton
          className={classes.button}
          onClick={open ? closeDrawer : openDrawer}
        >
          {open ? 'chevron_left' : 'chevron_right'}
        </IconButton>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MiniDrawer);
