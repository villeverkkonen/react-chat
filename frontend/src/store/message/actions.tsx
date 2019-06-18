import { Message, SEND_MESSAGE, MessageActionTypes } from './types';

export function sendMessage(newMessage: Message): MessageActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  };
}