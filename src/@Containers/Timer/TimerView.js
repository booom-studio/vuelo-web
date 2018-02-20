import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

const TimerView = ({ classes, color, title, time }) => (
  <div
    className={classes.container}
    style={{
      background: `radial-gradient(rgba(255,255, 255, 0.5), transparent) ${
        color
      }`
    }}
  >
    <Typography color="inherit" className={classes.title}>
      {title}
    </Typography>
    <Typography color="inherit" className={classes.time}>
      {time}
    </Typography>
    <IconButton>
      <Icon className={classes.button}>play_circle_filled</Icon>
    </IconButton>
  </div>
);

TimerView.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onProjectTitleChange: PropTypes.func
};

export default TimerView;
