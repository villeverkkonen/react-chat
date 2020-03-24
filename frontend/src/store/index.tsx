import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import messageReducer from './message/reducer';
import socketReducer from './socket/reducer';
import userReducer from './user/reducer';
import socketMiddleware from './socket/middleware';

const rootReducer = combineReducers({
  messageReducer: messageReducer,
  socketReducer: socketReducer,
  userReducer: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares, socketMiddleware);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer)
  );

  return store;
};