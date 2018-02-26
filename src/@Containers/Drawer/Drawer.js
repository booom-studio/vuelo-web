import React, { Component } from 'react';
import PropTypes from 'prop-types';

import mapValues from 'lodash.mapvalues';

import View from './withStyles';

export default class Drawer extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    openDrawer: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    projects: PropTypes.array,
    colors: PropTypes.object,
    createProject: PropTypes.func.isRequired,
    selectProject: PropTypes.func.isRequired,
    refetchProjects: PropTypes.func.isRequired
  };

  toggleDrawer = () => {
    const { open, openDrawer, closeDrawer } = this.props;

    if (open) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  createProject = async () => {
    const { createProject, refetchProjects, selectProject } = this.props;

    const { id } = await createProject({ title: 'New project' });
    await refetchProjects();
    selectProject(id, true);
  };

  selectProject = id => {
    const { selectProject } = this.props;

    selectProject(id);
  };

  render() {
    const { open, projects, loading, colors } = this.props;

    const lightColors = mapValues(colors, 'light');

    return (
      <View
        projects={loading ? [] : projects}
        colors={lightColors}
        onProjectClick={this.selectProject}
        onCreateProjectClick={this.createProject}
        onDrawerToggleClick={this.toggleDrawer}
        open={open}
      />
    );
  }
}
