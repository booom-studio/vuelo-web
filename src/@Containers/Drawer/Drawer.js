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
    width: 50,
    overflowX: 'hidden',
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen
    })
  }
});

class MiniDrawer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    closeDrawer: PropTypes.func.isRequired
  };

  render() {
    const { open, classes = {}, openDrawer, closeDrawer } = this.props;

    return (
      <Drawer
        type="permanent"
        open={open}
        classes={{
          paper: cx(classes.drawerPaper, { [classes.drawerPaperClose]: !open })
        }}
      >
        <div className={classes.drawerInner}>
          <Divider />
          <List className={classes.list}>
            <ListItem button component={Link} to="/calendar">
              <ListItemIcon>
                <Icon>perm_contact_calendar</Icon>
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItem>
            <ListItem to="/projects" component={Link} button>
              <ListItemIcon>
                <Icon>stars</Icon>
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
          </List>
          <Divider />
          <List className={classes.list} />
        </div>
        <IconButton onClick={open ? closeDrawer : openDrawer}>
          {open ? 'chevron_left' : 'chevron_right'}
        </IconButton>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MiniDrawer);
