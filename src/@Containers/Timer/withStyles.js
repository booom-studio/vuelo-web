import { withStyles } from 'material-ui/styles';

import TimerView from './TimerView';

const styles = ({ palette, spacing }) => ({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 18,
    letterSpacing: 0.5
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
