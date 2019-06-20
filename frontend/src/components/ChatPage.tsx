import React from 'react';
import MessageList from './MessageList';
import ChatForm from './ChatForm';

const ChatPage = () => {
  return (
    <div className="chat-page">
      <MessageList />
      <ChatForm />
    </div>
  );
}

export default ChatPage;