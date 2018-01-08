import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';

const mapStateToProps = ({ signedIn }) => ({
  signedIn
});

export default connect(mapStateToProps)(PrivateRoute);
