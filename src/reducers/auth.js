const initialState = {
  uid: null,
  displayName: null,
  img: null,
};

export default (state=initialState, action) => {
  switch (action.type) {
    case "LOGIN_OK":
      const { uid, displayName, img } = action.payload;
      return {
        ...state,
        uid,
        displayName,
        img,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
