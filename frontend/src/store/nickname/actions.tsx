import { CHANGE_NICKNAME, NicknameActionTypes } from './types';

export function changeNickname(newNickname: string): NicknameActionTypes {
  return {
    type: CHANGE_NICKNAME,
    payload: newNickname
  }
}