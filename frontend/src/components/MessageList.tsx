import React from 'react';
import { Message } from '../store/message/types';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.SFC<MessageListProps> = ({ messages }) => {
  return (
    <div className="message-list" id="message-list">
      {messages.map(message => (
        <div className="message-item" key={message.timestamp}>
          <p className="message-from" style={{ fontWeight: 'bold', marginBottom: 0 }}>From: {message.user}</p>
          <p style={{ marginTop: 0 }}>{message.message}</p>
        </div>
      ))}
    </div>
  );
}

export default MessageList;