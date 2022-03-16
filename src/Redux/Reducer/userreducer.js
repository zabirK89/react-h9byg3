import { Fetch_users } from '../Type/usertype';

const initialState = {
  users: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Fetch_users: {
      return {
        ...state
      };
    }
  }
  return state;
}
