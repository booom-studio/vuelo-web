import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatDuration } from '@utils';

import Loading from '@Components//Loading';

import View from './withStyles';

export default class Timer extends Component {
  static propTypes = {
    updateProject: PropTypes.func.isRequired,
    toggleProject: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    currentTimeEntry: PropTypes.object,
    currentTimeEntryPolling: PropTypes.shape({
      start: PropTypes.func.isRequired,
      stop: PropTypes.func.isRequired
    }).isRequired,
    project: PropTypes.object,
    colors: PropTypes.object,
    isProjectNew: PropTypes.bool
  };

  state = {
    title: '',
    formattedTime: '00:00:00'
  };

  componentDidMount() {
    const { currentTimeEntryPolling: { start } } = this.props;

    start(1000);
  }

  componentWillUnmount() {
    const { currentTimeEntryPolling: { stop } } = this.props;

    stop();
  }

  updateTime = () => {
    const { project, currentTimeEntry } = this.props;

    if (project.id !== currentTimeEntry.projectId) {
      return this.setState({ formattedTime: '00:00:00' });
    }

    const elapsedMs = currentTimeEntry
      ? Date.now() - currentTimeEntry.startTime
      : 0;

    const formattedTime = formatDuration(elapsedMs);

    this.setState({ formattedTime });
  };

  componentWillReceiveProps({
    project: newProject,
    isProjectNew,
    currentTimeEntry: nextTimeEntry
  }) {
    const { project, updateProject, currentTimeEntry } = this.props;
    if (newProject) {
      if (project && project.id !== newProject.id) {
        updateProject({ ...project, title: this.state.title });
      }

      if (nextTimeEntry) {
        if (newProject.id !== nextTimeEntry.projectId) {
          this.setState({ formattedTime: '00:00:00' });
        } else {
          const elapsedMs = nextTimeEntry
            ? Date.now() - nextTimeEntry.startTime
            : 0;

          const formattedTime = formatDuration(elapsedMs);

          this.setState({ formattedTime });
        }
      }

      this.setState({ title: newProject.title });

      if (isProjectNew) {
        // setState nextTick
        setTimeout(() => {
          this.input.select();
        }, 0);
      }
    }

    if (nextTimeEntry && !currentTimeEntry) {
      this.updateTimeInterval = setInterval(this.updateTime, 1000);
    } else if (!nextTimeEntry) {
      clearInterval(this.updateTimeInterval);
    }
  }

  onProjectTitleChange = title => {
    this.setState({ title });
  };

  onProjectTitleSubmit = evt => {
    evt.preventDefault();

    const { updateProject, project } = this.props;
    const { title } = this.state;

    updateProject({ ...project, title });
  };

  toggleProject = async () => {
    const { toggleProject, project } = this.props;

    await toggleProject(project.id);
  };

  render() {
    const { project, loading, currentTimeEntry, colors } = this.props;

    if (loading || !colors) {
      return <Loading />;
    }

    const isRunning =
      currentTimeEntry && currentTimeEntry.projectId === project.id;

    const { title, formattedTime } = this.state;
    const color = colors[project.color].light;

    return (
      <View
        color={color}
        title={title}
        time={formattedTime}
        isRunning={isRunning}
        onProjectTitleChange={this.onProjectTitleChange}
        onProjectTitleSubmit={this.onProjectTitleSubmit}
        onToggleClick={this.toggleProject}
        inputRef={input => (this.input = input)}
      />
    );
  }
}
