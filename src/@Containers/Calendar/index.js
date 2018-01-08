import { connect } from 'react-redux';

import Calendar from './Calendar';

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(Calendar);
