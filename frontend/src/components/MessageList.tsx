import React from 'react';
import { connect } from 'react-redux';
import { Message } from '../store/message/types';
import { MessageState } from '../store/message/types';

interface MessageListProps {
  messageReducer: MessageState;
  messages: Message[];
}

const mapStateToProps = (state: MessageListProps) => ({
  messages: state.messages
})

class MessageList extends React.Component<MessageListProps> {
  render() {
    return (
      <div className="message-list" id="message-list">
        {this.props.messageReducer.messages.map(message => (
          <div className="message-item" key={message.timestamp}>
            <p className="message-from" style={{ fontWeight: 'bold', marginBottom: 0 }}>From: {message.user}</p>
            <p style={{ marginTop: 0 }}>{message.message}</p>
          </div>
        ))}
      </div>
    );
  };
}

export default connect(mapStateToProps)(MessageList);