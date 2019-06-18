import React from 'react';
import { UpdateMessageParam } from '../App';
import { UpdateNicknameParam } from '../App';

interface ChatInterfaceProps {
  nickname: string;
  message: string;
  sendMessage: (message: string) => void;
  updateMessage: (event: UpdateMessageParam) => void;
  updateNickname: (event: UpdateNicknameParam) => void;
}

const ChatForm: React.SFC<ChatInterfaceProps> = ({
  nickname,
  message,
  sendMessage,
  updateMessage,
  updateNickname
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
        id="nickname-input"
        value={nickname}
        onChange={updateNickname}
      />
      <br />
      <input
        id="chat-input"
        value={message}
        onChange={updateMessage}
        onKeyPress={keyPress}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button onClick={send} id="send-message-btn">Send</button>
    </div>
  );
}

export default ChatForm;