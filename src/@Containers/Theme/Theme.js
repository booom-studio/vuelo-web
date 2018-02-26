import React from 'react';
import PropTypes from 'prop-types';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

export default class Theme extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  state = {
    theme: null
  };

  componentWillReceiveProps({ colors }) {
    const unit = 8;

    const theme = createMuiTheme({
      palette: {
        type: 'dark',
        projectColors: colors
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
    });

    this.setState({ theme });
  }

  render() {
    const { children } = this.props;
    const { theme } = this.state;

    if (!theme) {
      return <h1>loading</h1>;
    }

    return (
      <MuiThemeProvider theme={theme}>
        {children}
        <Reboot />
      </MuiThemeProvider>
    );
  }
}

// const Theme = ({ children }) => (
//   <MuiThemeProvider theme={theme}>
//     {children}
//     <Reboot />
//   </MuiThemeProvider>
// );

// Theme.propTypes = {
//   children: PropTypes.node.isRequired
// };

// export default Theme;
