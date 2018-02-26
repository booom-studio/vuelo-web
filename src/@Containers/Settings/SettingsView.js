import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import IconButton from 'material-ui/IconButton';
import CubeIcon from './CubeIcon';

const SettingsView = ({
  classes,
  onClick,
  isActive,
  cubeId,
  onSubmit,
  onChange,
  inputRef
}) => (
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
    <form className={classes.form} onSubmit={onSubmit}>
      <input
        placeholder="Enter your Cube ID"
        className={classes.input}
        onChange={({ target: { value } }) => onChange(value)}
        value={cubeId}
        ref={inputRef}
      />
    </form>
  </div>
);

SettingsView.propTypes = {
  classes: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  cubeId: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  inputRef: PropTypes.func
};

export default SettingsView;
