import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SettingsView from './withStyles';

export default class Settings extends Component {
  static propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired,
    openDrawer: PropTypes.func.isRequired,
    setCubeId: PropTypes.func,
    cubeId: PropTypes.string,
    cubeStatus: PropTypes.oneOf(['connected', 'not-connected', 'unconfirmed']),
    loadingCubeInfo: PropTypes.bool
  };

  state = {
    cubeId: ''
  };

  componentWillReceiveProps({ cubeId: nextCubeId }) {
    const { cubeId } = this.props;

    if (!cubeId && nextCubeId) {
      this.setState({ cubeId: nextCubeId });
    }
  }

  onSubmit = evt => {
    evt.preventDefault();

    const { setCubeId } = this.props;
    const { cubeId } = this.state;

    setCubeId(cubeId);
  };

  onChange = cubeId => {
    this.setState({ cubeId });
  };

  onClick = () => {
    const { isDrawerOpen, openDrawer } = this.props;

    this.input.select();
    if (!isDrawerOpen) {
      openDrawer();
    }
  };

  render() {
    const { loadingCubeInfo, cubeStatus } = this.props;
    const { cubeId } = this.state;

    if (loadingCubeInfo) {
      return null;
    }

    return (
      <SettingsView
        cubeId={cubeId}
        isActive={cubeStatus === 'connected'}
        onClick={this.onClick}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        inputRef={input => (this.input = input)}
      />
    );
  }
}
