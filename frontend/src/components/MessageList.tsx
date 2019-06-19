import React from 'react';
import { connect } from 'react-redux';
import { Message } from '../store/message/types';

interface MessageListState {
  messageReducer: {
    messages: [];
  }
}

interface MessageListProps {
  messages: [];
}

export class MessageList extends React.Component {
  messageListRef = React.createRef<HTMLDivElement>();

  componentDidUpdate(): void {
    const messageListElement: Element = this.messageListRef.current as Element;
    const shouldScroll: boolean = messageListElement.scrollTop + messageListElement.clientHeight !== messageListElement.scrollHeight;

    if (shouldScroll) {
      this.scrollToBottom(messageListElement);
    }
  }

  scrollToBottom = (elementToBeScrolled: Element): void => {
    elementToBeScrolled.scrollTop = elementToBeScrolled.scrollHeight;
  };

  render() {
    const { messages } = this.props as MessageListProps;

    return (
      <div className="message-list" id="message-list" ref={this.messageListRef} style={{ display: 'inline-block', height: 'calc(100vh - 200px)', overflowY: 'scroll' }}>
        {messages.map((message: Message) => (
          <div className="message-item" key={message.timestamp}>
            <p className="message-from" style={{ fontWeight: 'bold', marginBottom: 0 }}>From: {message.user}</p>
            <p style={{ marginTop: 0 }}>{message.message}</p>
          </div>
        ))}
      </div>
    );
  };
}

const mapStateToProps = (state: MessageListState) => ({
  messages: state.messageReducer.messages
});

export default connect(mapStateToProps)(MessageList);