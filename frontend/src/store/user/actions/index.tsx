export const USER_JOINED = 'USER_JOINED';
export const USER_LEFT = 'USER_LEFT';
export const CHANGE_USERNAME = 'CHANGE_USERNAME';

export const userJoined = (username: string) => {
  return {
    type: USER_JOINED,
    username
  };
};

export const userLeft = (username: string) => {
  return {
    type: USER_LEFT,
    username
  };
};

export const changeUsername = (username: string) => {
  return {
    type: CHANGE_USERNAME,
    username
  };
};