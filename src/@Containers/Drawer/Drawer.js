import React, { Component } from 'react';
import PropTypes from 'prop-types';

import sample from 'lodash.sample';

import View from './DrawerView';

export default class Drawer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    openDrawer: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    projects: PropTypes.array,
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
    const { createProject, refetchProjects, theme: { palette } } = this.props;

    const color = sample(palette.projectColors);

    await createProject('New project', color);
    await refetchProjects();
  };

  selectProject = id => {
    const { selectProject } = this.props;

    selectProject(id);
  };

  render() {
    const { classes, open, projects, loading } = this.props;

    return (
      <View
        classes={classes}
        projects={loading ? [] : projects}
        onProjectClick={this.selectProject}
        onCreateProjectClick={this.createProject}
        onDrawerToggleClick={this.toggleDrawer}
        open={open}
      />
    );
  }
}
