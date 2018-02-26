import { withStyles } from 'material-ui/styles';

import Drawer from './DrawerView';

const styles = ({ palette, transitions, drawer }) => ({
  drawer: {
    position: 'relative',
    overflow: 'visible',
    width: drawer.width,
    justifyContent: 'space-between',
    backgroundColor: palette.common.black,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shortest
    })
  },
  drawerOpened: {
    width: drawer.fullWidth
  },
  button: {
    width: drawer.width,
    height: drawer.width
  },
  toggleDrawer: {
    opacity: 0.5
  }
});

export default withStyles(styles)(Drawer);
