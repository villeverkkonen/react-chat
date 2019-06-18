import React from 'react';
import MessageList from './components/MessageList';
import ChatForm from './components/ChatForm';
import { AppState } from './store';
import { sendMessage } from './store/chat/actions';
import { ChatState } from './store/chat/types';
import { connect } from 'react-redux';

interface AppProps {
  sendMessage: typeof sendMessage;
  chat: ChatState;
};

export type UpdateMessageParam = React.SyntheticEvent<{ value: string }>;
export type UpdateNicknameParam = React.SyntheticEvent<{ value: string }>;

class App extends React.Component<AppProps> {
  state = {
    message: '',
    nickname: ''
  };

  componentDidMount() {
    this.props.sendMessage({
      user: 'Chat Bot',
      message:
        'Hello!',
      timestamp: new Date().getTime()
    });
    const nickname = "Guest" + Math.floor(Math.random() * 1001);
    this.setState({ nickname });
  }

  updateNickname = (event: UpdateNicknameParam) => {
    this.setState({ nickname: event.currentTarget.value });
  }

  updateMessage = (event: UpdateMessageParam) => {
    this.setState({ message: event.currentTarget.value });
  };

  sendMessage = (message: string) => {
    this.props.sendMessage({
      user: this.state.nickname,
      message: message,
      timestamp: new Date().getTime()
    });
    this.setState({ message: '' });
  };

  render() {
    return (
      <div className="parent">
        <MessageList messages={this.props.chat.messages} />
        <ChatForm
          nickname={this.state.nickname}
          message={this.state.message}
          sendMessage={this.sendMessage}
          updateMessage={this.updateMessage}
          updateNickname={this.updateNickname}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  chat: state.chat
});

export default connect(
  mapStateToProps,
  { sendMessage }
)(App);