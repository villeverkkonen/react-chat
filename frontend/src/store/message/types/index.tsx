export interface Message {
  username: string;
  message: string;
  timestamp: number;
};

// export interface MessageState {
//   username: string;
//   messages: Message[];
// };

// export const SEND_MESSAGE_RESPONSE = 'SEND_MESSAGE_RESPONSE';
// export const MESSAGE_SENT = 'MESSAGE_SENT';
// export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
// export const USER_CHANGED = 'USER_CHANGED';

// interface SendMessageResponseAction {
//   type: typeof SEND_MESSAGE_RESPONSE;
//   payload: Message;
// };

// interface MessageSentAction {
//   type: typeof MESSAGE_SENT;
//   payload: Message;
// };

// interface SendMessageRequestAction {
//   type: typeof SEND_MESSAGE_REQUEST;
//   payload: Message;
// };

// interface UserChangedAction {
//   type: typeof USER_CHANGED;
//   payload: string;
// };

// export type MessageActionTypes = SendMessageRequestAction | SendMessageResponseAction | MessageSentAction;