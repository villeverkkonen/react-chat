import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../store/message/actions';
import { changeUsername } from '../store/user/actions';
import { Message } from '../store/message/types';
import { connectSocket } from '../store/socket/actions';
import { userJoined } from '../store/user/actions';

interface ChatFormProps {
  sendMessage: (message: Message) => void;
  changeUsername: (username: string) => void;
  connectSocket: (username: string) => void;
  userJoined: (username: string) => void;
}

type UpdateMessageParam = React.SyntheticEvent<{ value: string }>;
type UpdateUsernameParam = React.SyntheticEvent<{ value: string }>;

export class ChatForm extends React.Component<ChatFormProps> {
  state = {
    username: '',
    message: ''
  };

  componentDidMount() {
    const username = "Guest" + Math.floor(Math.random() * 1001);
    this.setState({ username });

    this.props.connectSocket(username);
    this.props.userJoined(username);
  }

  keyPress = (e: React.KeyboardEvent<any>) => {
    if (e.key === "Enter") {
      this.sendChatMessage();
    }
  }

  sendChatMessage = (): void => {
    if (this.state.message !== '') {
      this.props.sendMessage({
        username: this.state.username,
        message: this.state.message,
        timestamp: new Date().getTime()
      });
      this.setState({ message: '' });
    }
  };

  sendChatMessageWithParams = (message: Message) => {
    this.props.sendMessage(message);
  }

  updateUsername = (event: UpdateUsernameParam) => {
    this.setState({ username: event.currentTarget.value });
    this.props.changeUsername(event.currentTarget.value);
  }

  updateMessage = (event: UpdateMessageParam) => {
    this.setState({ message: event.currentTarget.value });
  };

  render() {
    const { username, message } = this.state;

    return (
      <div>
        <div className="chat-form">
          <input
            id="nickname-input"
            value={username}
            onChange={this.updateUsername}
          />
          <br />
          <input
            id="chat-input"
            value={message}
            onChange={this.updateMessage}
            onKeyPress={this.keyPress}
            className="chat-input"
            placeholder="Type a message..."
            autoFocus
          />
          <button onClick={this.sendChatMessage} id="send-message-btn">Send</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any): ChatFormProps => ({
  sendMessage: (message: Message) => dispatch(sendMessage(message)),
  changeUsername: (username: string) => dispatch(changeUsername(username)),
  connectSocket: (username: string) => dispatch(connectSocket(username)),
  userJoined: (username: string) => dispatch(userJoined(username))
});

export default connect(null, mapDispatchToProps)(ChatForm);