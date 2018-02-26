import { withStyles } from 'material-ui/styles';

import SettingsView from './SettingsView';

const styles = ({ spacing, drawer, transitions }) => ({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
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
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: spacing.unit / 2,
    flex: 1
  },
  input: {
    fontSize: 12,
    letterSpacing: 0.5,
    background: 'none',
    border: 'none',
    outline: 'none',
    width: '90%',
    paddingBottom: spacing.unit / 2,
    color: 'rgba(255, 255, 255, .5)',
    borderBottom: '1px solid rgba(255, 255, 255, .5)',
    transition: transitions.create(['color', 'border-bottom'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shortest
    }),
    '&:focus': {
      color: 'white',
      borderBottomColor: 'white'
    }
  }
});

export default withStyles(styles)(SettingsView);
