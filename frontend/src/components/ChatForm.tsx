import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../store/message/actions';
import { Message } from '../store/message/types';
import messageReducer from '../store/message/reducer';

interface ChatFormProps {
  sendMessage: (message: Message) => void;
}

type UpdateMessageParam = React.SyntheticEvent<{ value: string }>;
type UpdateNicknameParam = React.SyntheticEvent<{ value: string }>;

export class ChatForm extends React.Component<ChatFormProps> {
  state = {
    user: '',
    message: ''
  };

  componentDidMount() {
    const user = "Guest" + Math.floor(Math.random() * 1001);
    this.setState({ user });

    this.sendChatMessageWithParams({
      user: 'Chat Bot',
      message: 'Hello ' + user + '! Change the nickname and start chatting.',
      timestamp: new Date().getTime()
    });
  }

  keyPress = (e: React.KeyboardEvent<any>) => {
    if (e.key === "Enter") {
      this.sendChatMessage();
    }
  }

  sendChatMessage = (): void => {
    if (this.state.message !== '') {
      this.props.sendMessage({
        user: this.state.user,
        message: this.state.message,
        timestamp: new Date().getTime()
      });
      this.setState({ message: '' });
    }
  };

  sendChatMessageWithParams = (message: Message) => {
    this.props.sendMessage(message);
  }

  updateUser = (event: UpdateNicknameParam) => {
    this.setState({ user: event.currentTarget.value });
  }

  updateMessage = (event: UpdateMessageParam) => {
    this.setState({ message: event.currentTarget.value });
  };

  render() {
    const { user, message } = this.state;

    return (
      <div>
        <div className="chat-form">
          <input
            id="nickname-input"
            value={user}
            onChange={this.updateUser}
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
  sendMessage: (message: Message) => dispatch(sendMessage(message))
});

export default connect(null, mapDispatchToProps)(ChatForm);