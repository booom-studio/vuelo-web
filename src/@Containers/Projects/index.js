import { connect } from 'react-redux';

import Projects from './Projects';

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(Projects);
