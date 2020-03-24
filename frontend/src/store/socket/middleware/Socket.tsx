import * as io from 'socket.io-client';
import { Message } from '../../message/types';

const EVENTS = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  MESSAGE: 'message',
  CHATBOT: 'chatbot',
  UPDATE_USER_LIST: 'update_user_list'
};

export default class Socket {
  public username: string;
  public port: string;
  private onChange: (isConnected: boolean) => void;
  private onMessage: (message: Message) => void;
  private socket: any;

  constructor(onChange: (isConnected: boolean) => void, onMessage: (message: Message) => void) {
    this.onChange = onChange;
    this.onMessage = onMessage;
    this.socket = '';
    this.username = '';
    this.port = '';
  };

  public connect = (username: string, port: string) => {
    this.username = username;
    this.port = port;

    // const host = `localhost:${port}`; // Running from local network
    // this.socket = io.connect(host);
    this.socket = io.connect(); // Running from Heroku

    this.socket.on(EVENTS.CONNECT, this.onConnected);
  };

  public onConnected = () => {
    this.socket.on(EVENTS.MESSAGE, this.onMessage);
    this.onChange(true);

    const helloMessage: Message = {
      username: 'Chat Bot',
      message: 'Hello ' + this.username + '! Change the nickname and start chatting.',
      timestamp: new Date().getTime()
    };

    const joinMessage: Message = {
      username: '',
      message: `${this.username} joined the chat!`,
      timestamp: new Date().getTime()
    }

    this.sendMessageToMe(helloMessage);
    this.sendMessageToOthers(joinMessage);
    this.updateUserList(joinMessage.username);
    this.socket.on(EVENTS.DISCONNECT, this.disconnect);
  };

  public sendMessageToOthers = (message: Message) => {
    if (typeof this.socket.emit === 'function') {
      this.socket.emit(EVENTS.MESSAGE, message)
    } else {
      console.error('Cannot emit socket messages. Socket.io not connected.');
    }
  }

  public sendMessageToMe = (message: Message) => {
    if (typeof this.socket.emit === 'function') {
      this.socket.emit(EVENTS.CHATBOT, message)
    } else {
      console.error('Cannot emit socket messages. Socket.io not connected.');
    }
  }

  public updateUserList = (username: string) => {
    if (typeof this.socket.emit === 'function') {
      this.socket.emit(EVENTS.UPDATE_USER_LIST, username)
    } else {
      console.error('Cannot emit socket messages. Socket.io not connected.');
    }
  }

  public disconnect = () => {
    console.log("DISCONNECT");
    const leaveMessage: Message = {
      username: '',
      message: `${this.username} left the chat!`,
      timestamp: new Date().getTime()
    }
    this.sendMessageToOthers(leaveMessage);
    this.socket.close();
  }
}