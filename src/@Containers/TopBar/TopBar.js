import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Popover from 'material-ui/Popover/Popover';

const styles = ({ palette, spacing, transitions, zIndex, drawerWidth }) => ({
  icon: {
    marginLeft: spacing.unit
  },
  appBar: {
    // width: '100%',
    position: 'absolute',
    zIndex: zIndex.drawer + 1,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  toolbar: {},
  toolbarContent: {
    justifyContent: 'space-between'
  },
  avatar: {
    cursor: 'pointer',
    border: `1px solid ${palette.grey.A200}`
  }
});

class TopBar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    signedIn: PropTypes.bool.isRequired,
    signOut: PropTypes.func.isRequired,
    user: PropTypes.object,
    drawerOpen: PropTypes.bool.isRequired,
    openDrawer: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired
  };

  state = {
    anchorElement: null
  };

  toggleContext = ({ target }) => {
    this.setState({ anchorElement: target });
  };

  handleRequestClose = () => {
    this.setState({ anchorElement: null });
  };

  render() {
    const {
      classes,
      user,
      signOut,
      signedIn,
      drawerOpen,
      openDrawer,
      closeDrawer
    } = this.props;
    const { anchorElement } = this.state;

    return (
      <AppBar
        color="default"
        className={cx(classes.appBar, drawerOpen && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar} disableGutters={!drawerOpen}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={drawerOpen ? closeDrawer : openDrawer}
            className={cx(classes.menuButton)}
          >
            <Icon>menu</Icon>
          </IconButton>
          <div className={classes.toolbarContent}>
            <Typography type="title" color="inherit">
              Vuelo
            </Typography>
            {signedIn && (
              <React.Fragment>
                <Avatar
                  alt={user.name}
                  src={user.picture}
                  className={classes.avatar}
                  onClick={this.toggleContext}
                >
                  {!user.picture && <Icon>person</Icon>}
                </Avatar>
                <Popover
                  id="menu-appbar"
                  anchorEl={anchorElement}
                  open={!!anchorElement}
                  onRequestClose={closeDrawer}
                  getContentAnchorEl={null}
                  transformOrigin={{
                    vertical: -10
                  }}
                  anchorOrigin={{
                    horizontal: 'left',
                    vertical: 'bottom'
                  }}
                >
                  <MenuList role="menu">
                    <MenuItem
                      onClick={() => {
                        this.handleRequestClose();
                        signOut();
                      }}
                    >
                      Sign out
                      <Icon className={classes.icon}>exit_to_app</Icon>
                    </MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>
                      Settings
                      <Icon className={classes.icon}>settings</Icon>
                    </MenuItem>
                  </MenuList>
                </Popover>
              </React.Fragment>
            )}
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopBar);
