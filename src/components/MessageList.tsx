import React from 'react';
import { Message } from '../store/chat/types';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.SFC<MessageListProps> = ({ messages }) => {
  return (
    <div className="chat-history">
      {messages.map(message => (
        <div className="message-item" key={message.timestamp}>
          <h3>From: {message.user}</h3>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
}

export default MessageList;