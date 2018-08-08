const initialState = {
  all: [],
  my: [],
  pushToday: false,
};

export default (state=initialState, action) => {
  switch (action.type) {
    case "ALL_STAMPS":
      const { stamp } = action.payload;
      return {
        ...state,
        all: [
          ...state.all,
          stamp,
        ],
      };
    case "MY_STAMPS":
      return {
        ...state,
        my: action.payload.stamps,
      };
    case "PUSH_TODAY":
      return {
        ...state,
        pushToday: action.payload.bool,
      };
    default:
      return state;
  }
};
