import React from 'react';
import { connect } from 'react-redux';
import { Message } from '../store/message/types';
import UserList from './UserList';
import socketIOClient from "socket.io-client";

interface MessageListState {
  messageReducer: {
    messages: Message[];
  }
}

interface MessageListProps {
  messages: Message[];
}

export class MessageList extends React.Component<MessageListProps, { apiCall: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      apiCall: ''
    }
  }
  
  messageListRef = React.createRef<HTMLDivElement>();

  componentDidUpdate(): void {
    const messageListElement: Element = this.messageListRef.current as Element;
    const shouldScroll: boolean = messageListElement.scrollTop + messageListElement.clientHeight !== messageListElement.scrollHeight;

    const socket = socketIOClient('/');
    // socket.on('apiCall', (data: string) => this.setState({ apiCall: data }));
    // if (shouldScroll) {
    //   this.scrollToBottom(messageListElement);
    // }
  }

  scrollToBottom = (elementToBeScrolled: Element): void => {
    elementToBeScrolled.scrollTop = elementToBeScrolled.scrollHeight;
  };

  render() {
    const { messages } = this.props as MessageListProps;

    return (
      <div>
        <div className="message-list" id="message-list" ref={this.messageListRef} style={{ display: 'inline-block', height: 'calc(100vh - 200px)', overflowY: 'scroll', padding: '0 10px 0 10px', width: '50%' }}>
          {messages.map((message: Message) => (
            message.message ?
              <div className="message-item" key={message.timestamp}>
                {message.username.length > 0
                ?
                  <div>
                    <p className="message-from" style={{ fontWeight: 'bold', marginBottom: 0 }}>{message.username}</p>
                    <p style={{ marginTop: 0 }}>{message.message}</p>
                  </div>
                :
                  message.message.includes("joined")
                  ?
                    <p className="message-from joined-message" style={{ marginTop: 0, color: 'green' }}>{message.message}</p>
                  :
                    message.message.includes("left")
                    ?
                      <p className="message-from left-message" style={{ marginTop: 0, color: 'red' }}>{message.message}</p>
                    : null}
              </div>
            : null
          ))}
        </div>
        <div style={{ display: 'inline-block', paddingLeft: '20px' }}>
          <UserList />
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state: MessageListState) => ({
  messages: state.messageReducer.messages
});

export default connect(mapStateToProps)(MessageList);