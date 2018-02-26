import { withStyles } from 'material-ui/styles';

import TimerView from './TimerView';

const styles = ({ palette, spacing, transitions }) => ({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    transition: transitions.create('background', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shortest
    })
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    fontSize: 18,
    letterSpacing: 0.5,
    background: 'none',
    border: 'none',
    outline: 'none',
    width: '100%',
    maxWidth: 480,
    padding: 0,
    textAlign: 'center'
  },
  time: {
    fontSize: 120,
    fontWeight: 100,
    margin: `${spacing.unit * 4.5}px 0`
  },
  button: {
    fontSize: 30,
    color: palette.common.black
  }
});

export default withStyles(styles)(TimerView);
