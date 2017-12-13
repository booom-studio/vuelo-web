import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from 'dux';

const ConfiguredReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

ConfiguredReduxProvider.displayName = 'ConfiguredReduxProvider';
ConfiguredReduxProvider.propTypes = {
  children: PropTypes.node
};

export default ConfiguredReduxProvider;
