import React, { Component } from 'react';
import PropTypes from 'prop-types';

import View from './withStyles';

export default class Timer extends Component {
  static propTypes = {
    selectedProjectId: PropTypes.string,
    projects: PropTypes.array,
    loading: PropTypes.bool
  };

  render() {
    const { selectedProjectId, projects, loading } = this.props;

    if (loading) {
      return <h1>loading</h1>;
    }

    const project = selectedProjectId
      ? projects.find(({ id }) => id === selectedProjectId)
      : projects[0];

    const time = '00:00:00';

    return <View color={project.color} title={project.title} time={time} />;
  }
}
