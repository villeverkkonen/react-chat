export interface Message {
  user: string;
  message: string;
  timestamp: number;
};

export interface MessageState {
  messages: Message[];
};

export const SEND_MESSAGE: string = 'SEND_MESSAGE';

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
};

export type MessageActionTypes = SendMessageAction;