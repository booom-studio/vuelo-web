import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SettingsView from './withStyles';

export default class Settings extends Component {
  static propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired,
    openDrawer: PropTypes.func.isRequired,
    isActive: PropTypes.bool
  };

  componentDidMount() {
    // start polling isActive
  }

  componentWillUnmount() {
    // Stop polling isActive
  }

  onClick = () => {
    const { isDrawerOpen, openDrawer } = this.props;

    if (!isDrawerOpen) {
      openDrawer();
    }
  };

  render() {
    const { isActive } = this.props;
    return <SettingsView isActive={isActive} onClick={this.onClick} />;
  }
}
