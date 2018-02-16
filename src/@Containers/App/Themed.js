import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

import amber from 'material-ui/colors/amber';

import './style.css';

const theme = createMuiTheme({
  palette: {
    primary: amber
  },
  zIndex: { drawer: 2 },
  drawerWidth: 200
});

const Themed = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <Reboot />
    {children}
  </MuiThemeProvider>
);

Themed.displayName = 'Themed';
Themed.propTypes = {
  children: PropTypes.node.isRequired
};

export default Themed;
