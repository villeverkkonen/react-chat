import { Message } from '../types';

export const SEND_MESSAGE_RESPONSE = 'SEND_MESSAGE_RESPONSE';
export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';

export const messageReceived = (message: Message) => {
  return {
    type: SEND_MESSAGE_RESPONSE,
    message
  };
};

export const sendMessage = (message: Message) => {
  return {
    type: SEND_MESSAGE_REQUEST,
    message
  };
};