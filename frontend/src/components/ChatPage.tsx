import React from 'react';
import MessageList from './MessageList';
import ChatForm from './ChatForm';
import UserList from './UserList';

const ChatPage = () => {
  return (
    <div className="chat-page">
      <MessageList />
      <ChatForm />
      <UserList />
    </div>
  );
}

export default ChatPage;