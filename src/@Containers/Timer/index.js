import { connect } from 'react-redux';
import { compose } from 'react-apollo';

// import { openDrawer, closeDrawer, selectProject } from '@dux/actions';
import { projects } from '@dux/queries';

import Timer from './Timer';

const mapStateToProps = ({ selectedProjectId }) => ({
  selectedProjectId
});

// const mapDispatchToProps = {
//   openDrawer,
//   closeDrawer,
//   selectProject
// };

export default compose(
  projects,
  // createProject,
  connect(mapStateToProps, null)
)(Timer);
