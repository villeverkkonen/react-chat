   
import {
  NicknameState,
  CHANGE_NICKNAME,
  NicknameActionTypes
} from './types';

const initialState: NicknameState = {
  nickname: 'Guest' + Math.floor(Math.random() * 1001)
};

export function nicknameReducer(
  state = initialState,
  action: NicknameActionTypes
): NicknameState {
    switch (action.type) {
      case CHANGE_NICKNAME:
        return {
          nickname: action.payload
        };
      default:
        return state;
    };
};