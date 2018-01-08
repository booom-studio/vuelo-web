import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

const Calendar = ({ user }) => (
  <Typography type="title">Hello {user.name}!</Typography>
);

Calendar.propTypes = {
  user: PropTypes.object.isRequired
};

export default Calendar;
