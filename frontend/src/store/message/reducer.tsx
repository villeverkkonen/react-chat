import {
  MessageState,
  SEND_MESSAGE,
  MessageActionTypes
} from './types';

const initialState: MessageState = {
  messages: [
    // {
    //   user: 'Chat Bot',
    //   message: 'Testi 1',
    //   timestamp: new Date().getTime()
    // },
    // {
    //   user: 'Chat Bot',
    //   message: 'Testi 2',
    //   timestamp: new Date().getTime()
    // }
  ]
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

export default messageReducer;