import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

const TimerView = ({
  classes,
  color,
  title,
  time,
  isRunning,
  onProjectTitleChange,
  onProjectTitleSubmit,
  onToggleClick,
  inputRef
}) => (
  <div
    className={classes.container}
    style={{
      background: `radial-gradient(closest-side, rgba(255,255, 255, 0.5), transparent) ${
        color
      }`
    }}
  >
    <form className={classes.titleContainer} onSubmit={onProjectTitleSubmit}>
      <input
        color="inherit"
        className={classes.title}
        onChange={({ target: { value } }) => onProjectTitleChange(value)}
        value={title}
        ref={inputRef}
      />
    </form>
    <Typography color="inherit" className={classes.time}>
      {time}
    </Typography>
    <IconButton onClick={onToggleClick}>
      <Icon className={classes.button}>
        {isRunning ? 'pause_circle_filled' : 'play_circle_filled'}
      </Icon>
    </IconButton>
  </div>
);

TimerView.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  isRunning: PropTypes.bool,
  onProjectTitleChange: PropTypes.func,
  onProjectTitleSubmit: PropTypes.func,
  onToggleClick: PropTypes.func,
  inputRef: PropTypes.func
};

export default TimerView;
