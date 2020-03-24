import Socket from './Socket';
import { CONNECT_SOCKET, connectionChanged } from '../actions';
import { messageReceived, SEND_MESSAGE_REQUEST } from '../../message/actions';
import { Message } from '../../message/types';

const socketMiddleware = (store: any) => {

  const onConnectionChange = (isConnected: boolean) => {
    store.dispatch(connectionChanged(isConnected));
  };

  const onIncomingMessage = (message: Message) => {
    console.log("TULEEX");
    store.dispatch(messageReceived(message));
  };

  const socket = new Socket(onConnectionChange, onIncomingMessage);

  return (next: any) => (action: any) => {
    const socketState = store.getState().socketReducer;

    switch (action.type) {
      case CONNECT_SOCKET:
        socket.connect(action.username, process.env.PORT || socketState.port);
        break;
      
      case SEND_MESSAGE_REQUEST:
        socket.sendMessageToOthers(action.message);
        break;

      default:
        break;
    };
    return next(action);
  };
};

export default socketMiddleware;