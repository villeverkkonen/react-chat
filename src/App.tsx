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

class App extends React.Component<AppProps> {
  state = {
    message: ''
  };

  componentDidMount() {
    this.props.sendMessage({
      user: 'Chat Bot',
      message:
        'Hello!',
      timestamp: new Date().getTime()
    });
  }

  updateMessage = (event: UpdateMessageParam) => {
    this.setState({ message: event.currentTarget.value });
  };

  sendMessage = (message: string) => {
    this.props.sendMessage({
      user: 'Guest',
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
          userName='Guest'
          message={this.state.message}
          updateMessage={this.updateMessage}
          sendMessage={this.sendMessage}
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