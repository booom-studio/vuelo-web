import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import amber from 'material-ui/colors/amber';

import './style.css';

const theme = createMuiTheme({
  palette: {
    primary: amber
  }
});

const Themed = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

Themed.displayName = 'Themed';
Themed.propTypes = {
  children: PropTypes.node.isRequired
};

export default Themed;
