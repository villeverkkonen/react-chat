import {
  SEND_MESSAGE_RESPONSE,
  SEND_MESSAGE_REQUEST
} from '../actions';
import { Message } from '../types';

interface State {
  username: string;
  messages: Message[];
}

const initialState: State = {
  username: `Guest${Math.floor(Math.random() * 1001)}`,
  messages: []
};

export function messageReducer(
  state = initialState,
  action: { type: string, message: Message }) {
    switch (action.type) {
      case SEND_MESSAGE_REQUEST:
          return {
            ...state,
            messages: state.messages.concat(action.message)
          };
      case SEND_MESSAGE_RESPONSE:
        return {
          ...state,
          messages: [...state.messages, action.message]
        };
      default:
        return state;
    };
};

export default messageReducer;