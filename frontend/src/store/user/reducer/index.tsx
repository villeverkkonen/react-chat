import {
  USER_JOINED,
  USER_LEFT,
  CHANGE_USERNAME
} from '../actions';

interface State {
  usernames: string[];
}

const initialState: State = {
  usernames: []
};

export function userReducer(
  state = initialState,
  action: { type: string, username: string }) {
    switch (action.type) {
      case USER_JOINED:
        return {
          usernames: state.usernames.concat(action.username)
        };
      case USER_LEFT:
        return {
          usernames: state.usernames.filter(username => username !== action.username)
        };
      case CHANGE_USERNAME:
        return {
          usernames: state.usernames.map(username => (username === action.username ? action.username : username))
        };
      default:
        return state;
    };
};

export default userReducer;