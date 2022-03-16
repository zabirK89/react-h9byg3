import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../Type/logintype';
const initialState = {
  token: null,
  id:null
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { body } = action;
      return {
        ...state,
        ...body,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}

export default authReducer;
