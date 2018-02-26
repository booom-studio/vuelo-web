import { connect } from 'react-redux';
import { compose } from 'react-apollo';

import {
  projects,
  updateProject,
  toggleProject,
  currentTimeEntry,
  colors
} from '@dux/queries';

import Timer from './Timer';

const mapStateToProps = (
  { selectedProjectId, isProjectNew },
  { projects }
) => ({
  selectedProjectId,
  isProjectNew,
  project: selectedProjectId
    ? projects.find(({ id }) => id === selectedProjectId)
    : projects[0]
});

export default compose(
  projects,
  updateProject,
  toggleProject,
  currentTimeEntry,
  colors,
  connect(mapStateToProps, null)
)(Timer);
