import React from 'react';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  container: {
    height: 36,
    width: 200,
    transform: 'translateX(-164px)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateX(0)'
    }
  },
  open: {
    transform: 'translateX(0)'
  },
  title: {
    display: 'inline-block',
    width: 160,
    fontFamily: 'Lato',
    fontSize: 12,
    letterSpacing: 0.3,
    textAlign: 'left',
    color: '#000000',
    padding: '10px 0 11px 10px',
    '&:hover': {}
  },
  icon: {
    float: 'right'
  }
});

const ProjectTitle = ({ classes, ...props }) => (
  <div
    className={
      props.drawerOpen
        ? `${classes.container} ${classes.open}`
        : classes.container
    }
    style={{ backgroundColor: props.color }}
  >
    <p className={classes.title}>{props.title}</p>
    {/* TODO: <Icon className={classes.icon}>arrow_forward</Icon> */}
  </div>
);

export default withStyles(styles)(ProjectTitle);
