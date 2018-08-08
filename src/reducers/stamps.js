const initialState = {
  all: [],
  my: [],
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
    default:
      return state;
  }
};
