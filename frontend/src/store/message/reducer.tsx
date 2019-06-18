import {
  MessageState,
  SEND_MESSAGE,
  MessageActionTypes
} from './types';

const initialState: MessageState = {
  messages: []
};

export function messageReducer(
  state = initialState,
  action: MessageActionTypes
): MessageState {
    switch (action.type) {
      case SEND_MESSAGE:
        return {
          messages: [...state.messages, action.payload]
        };
      default:
        return state;
    };
};