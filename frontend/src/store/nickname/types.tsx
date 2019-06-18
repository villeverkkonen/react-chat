export interface NicknameState {
  nickname: string;
};

export const CHANGE_NICKNAME: string = 'CHANGE_NICKNAME';

interface ChangeNicknameAction {
  type: typeof CHANGE_NICKNAME;
  payload: string;
};

export type NicknameActionTypes = ChangeNicknameAction;