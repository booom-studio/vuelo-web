import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import IconButton from 'material-ui/IconButton';
import CubeIcon from './CubeIcon';

const SettingsView = ({ classes, onClick, isActive }) => (
  <div className={classes.container}>
    <IconButton className={classes.button} onClick={onClick}>
      <div
        className={cx(classes.icon, classes.button, {
          [classes.active]: isActive
        })}
      >
        <CubeIcon isActive={isActive} />
      </div>
    </IconButton>
  </div>
);

SettingsView.propTypes = {
  classes: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};

export default SettingsView;
