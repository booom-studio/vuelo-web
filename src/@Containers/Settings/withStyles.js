import { withStyles } from 'material-ui/styles';

import SettingsView from './SettingsView';

const styles = ({ drawer, transitions }) => ({
  button: {
    width: drawer.width,
    height: drawer.width
  },
  icon: {
    color: 'rgba(255, 255, 255, .5)',
    transition: transitions.create('color', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shortest
    })
  },
  active: {
    color: 'white'
  }
});

export default withStyles(styles)(SettingsView);
