const LOGIN_OK = "LOGIN_OK";
const LOGOUT = "LOGOUT";

export const loginOk = user => ({
  type: LOGIN_OK,
  payload: {
    uid: user.uid,
    displayName: user.displayName,
    img: user.photoURL,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
