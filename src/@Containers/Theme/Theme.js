import React from 'react';
import PropTypes from 'prop-types';

import defaultsDeep from 'lodash.defaultsdeep';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

import Loading from '@Components/Loading';

const unit = 8;
const baseTheme = {
  palette: {
    type: 'dark'
  },
  spacing: {
    unit
  },
  typography: {
    fontFamily: ['"Lato"', 'sans-serif']
  },
  drawer: {
    fullWidth: unit * 25,
    width: unit * 4.5
  }
};

export default class Theme extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    loadingColors: PropTypes.bool.isRequired
  };

  state = {
    theme: createMuiTheme(baseTheme)
  };

  componentWillReceiveProps({ colors }) {
    const theme = createMuiTheme(
      defaultsDeep({}, baseTheme, {
        palette: {
          projectColors: colors
        }
      })
    );

    this.setState({ theme });
  }

  render() {
    const { children, loadingColors } = this.props;
    const { theme } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        {loadingColors ? <Loading /> : children}
        <Reboot />
      </MuiThemeProvider>
    );
  }
}
