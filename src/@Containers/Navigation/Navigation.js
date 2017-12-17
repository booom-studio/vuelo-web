import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Popover from 'material-ui/Popover/Popover';

const styles = theme => ({
  icon: {
    marginLeft: theme.spacing.unit
  },
  appBar: {
    width: '100%'
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  avatar: {
    cursor: 'pointer'
  }
});

class Navigation extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    signedIn: PropTypes.bool.isRequired,
    signOut: PropTypes.func.isRequired,
    user: PropTypes.object
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
    const { classes, user, signOut, signedIn } = this.props;
    const { anchorElement } = this.state;

    return (
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography type="title" color="inherit">
            Vuelo
          </Typography>
          {signedIn && (
            <React.Fragment>
              <Avatar
                alt="Adelle Charles"
                src={user.picture}
                className={classes.avatar}
                onClick={this.toggleContext}
              />
              <Popover
                id="menu-appbar"
                anchorEl={anchorElement}
                open={!!anchorElement}
                onRequestClose={this.handleRequestClose}
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
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navigation);
