import React from 'react';
import { UpdateMessageParam } from '../App';

interface ChatInterfaceProps {
  message: string;
  userName: string;
  sendMessage: (message: string) => void;
  updateMessage: (event: UpdateMessageParam) => void;
}

const ChatForm: React.SFC<ChatInterfaceProps> = ({
  userName,
  message,
  sendMessage,
  updateMessage
}) => {
  function keyPress(e: React.KeyboardEvent<any>) {
    if (e.key === "Enter") {
      send();
    }
  }

  function send() {
    sendMessage(message);
  }

  return (
    <div className="chat-form">
      <input
        value={message}
        onChange={updateMessage}
        onKeyPress={keyPress}
        className="chat-input"
        placeholder="Type a message..."
        id="chat-input"
      />
      <button onClick={send} id="send-message-btn">Send</button>
    </div>
  );
}

export default ChatForm;