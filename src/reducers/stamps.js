const initialState = {
  all: {},
  my: [],
};

export default (state=initialState, action) => {
  switch (action.type) {
    case "MY_STAMPS":
      return {
        ...state,
        my: action.payload.stamps,
      };
    default:
      return state;
  }
};
