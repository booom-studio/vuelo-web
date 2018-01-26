export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const INITIALIZE = 'INITIALIZE';
export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

const simpleAction = type => () => ({
  type
});

export const signIn = ({ user, token }) => ({
  type: SIGN_IN,
  user,
  token
});

export const signOut = simpleAction(SIGN_OUT);

export const initialize = simpleAction(INITIALIZE);

export const openDrawer = simpleAction(OPEN_DRAWER);
export const closeDrawer = simpleAction(CLOSE_DRAWER);
