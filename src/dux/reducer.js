import { SIGN_IN, SIGN_OUT, INITIALIZE } from 'dux/actions';

const initialState = {
  initialized: false,
  signedIn: false,
  user: null,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return Object.assign({}, state, {
        initialized: true
      });
    case SIGN_IN:
      const { user, token } = action;

      localStorage.setItem('token', token);
      return Object.assign({}, state, {
        signedIn: true,
        user,
        token
      });
    case SIGN_OUT:
      localStorage.removeItem('token');
      return Object.assign({}, state, {
        signedIn: false,
        user: null,
        token: null
      });
    default:
      return state;
  }
};
