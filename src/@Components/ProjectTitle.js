import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

import cx from 'classnames';

const styles = ({ transitions, palette, drawer }) => ({
  outerContainer: {
    position: 'relative',
    height: drawer.width
  },
  container: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    height: drawer.width,
    width: drawer.fullWidth,
    left: drawer.width - drawer.fullWidth,
    cursor: 'pointer',
    transition: transitions.create('left', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shortest
    }),
    '&:hover': {
      left: 0,

      '& $title': {
        opacity: 1
      },
      '& $icon': {
        opacity: 0.25
      }
    }
  },
  open: {
    left: 0,
    '& $title': {
      opacity: 1
    },
    '& $icon': {
      opacity: 0
    }
  },
  title: {
    fontSize: 12,
    letterSpacing: 0.3,
    color: palette.common.black
  },
  fadeIn: {
    opacity: 0,
    transition: transitions.create('opacity', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shortest,
      delay: transitions.duration.shortest
    })
  },
  icon: {}
});

const ProjectTitle = ({ classes, title, color, open, onClick }) => (
  <div className={classes.outerContainer}>
    <div
      className={cx(classes.container, { [classes.open]: open })}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <Typography variant="body1" className={cx(classes.fadeIn, classes.title)}>
        {title}
      </Typography>
      <Icon className={cx(classes.fadeIn, classes.icon)}>arrow_forward</Icon>
    </div>
  </div>
);

ProjectTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default withStyles(styles)(ProjectTitle);
