import React from 'react';
import MessageList from './components/MessageList';
import ChatForm from './components/ChatForm';
import { AppState } from './store';
import { changeNickname } from './store/nickname/actions';
import { sendMessage } from './store/message/actions';
import { NicknameState } from './store/nickname/types';
import { MessageState } from './store/message/types';
import { connect } from 'react-redux';

interface AppProps {
  sendMessage: typeof sendMessage;
  nicknameReducer: NicknameState;
  messageReducer: MessageState;
};

export type UpdateMessageParam = React.SyntheticEvent<{ value: string }>;
export type UpdateNicknameParam = React.SyntheticEvent<{ value: string }>;

class App extends React.Component<AppProps> {
  state = {
    message: '',
    nickname: ''
  };

  componentDidMount() {
    const nickname = "Guest" + Math.floor(Math.random() * 1001);
    this.setState({ nickname });

    this.props.sendMessage({
      user: 'Chat Bot',
      message: 'Hello ' + nickname + '!',
      timestamp: new Date().getTime()
    });
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
        <MessageList messageReducer={this.props.messageReducer} />
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
  nicknameReducer: state.nicknameReducer,
  messageReducer: state.messageReducer
});

export default connect(
  mapStateToProps,
  { changeNickname, sendMessage }
)(App);