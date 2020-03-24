import { CONNECTION_CHANGED } from '../actions';

const initialState = {
  connected: false
};

function socketReducer(state = initialState, action: { type: string, connected: boolean }) {
  let reduced;
  switch (action.type) {
    case CONNECTION_CHANGED:
      reduced = Object.assign({}, state, {
        connected: action.connected,
        isError: false
      });
      break;
    default:
      reduced = state;
  }
  return reduced;
}

export default socketReducer;