import React from 'react';
import PropTypes from 'prop-types';

import sample from 'lodash.sample';

import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styles = ({ palette }) => {
  const backgroundColor = palette.projectColors
    ? sample(palette.projectColors).light
    : '#ccff90'; // light green

  return {
    container: {
      height: '100vh',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: palette.common.black,
      background: `radial-gradient(rgba(255,255, 255, 0.5), transparent) ${
        backgroundColor
      }`
    }
  };
};

const Loading = ({ classes }) => (
  <div className={classes.container}>
    <CircularProgress size={100} color="inherit" thickness={1} />
  </div>
);

Loading.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Loading);
