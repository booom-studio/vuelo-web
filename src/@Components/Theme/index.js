import React from 'react';
import PropTypes from 'prop-types';

import pickBy from 'lodash.pickby';
import mapValues from 'lodash.mapvalues';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

import * as muiColors from 'material-ui/colors';

const colors = pickBy(mapValues(muiColors, 'A100'));

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    projectColors: colors
  },
  zIndex: { drawer: 2 },
  drawerWidth: 200
});

const Theme = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
    <Reboot />
  </MuiThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
