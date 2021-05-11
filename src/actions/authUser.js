// authUser.js
export const SET_AUTH_USER = 'SET_AUTH_USER';

export function setAuthUser(currentUser) {
  return {
    type: SET_AUTH_USER,
    currentUser
  };
}
