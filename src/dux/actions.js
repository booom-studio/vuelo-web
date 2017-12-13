export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const INITIALIZE = 'INITIALIZE';

export const signIn = ({ user, token }) => ({
  type: SIGN_IN,
  user,
  token
});

export const signOut = () => ({
  type: SIGN_OUT
});

export const initialize = () => ({
  type: INITIALIZE
});
