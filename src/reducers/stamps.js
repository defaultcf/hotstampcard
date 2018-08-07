const initialState = {
  all: {},
  my: [],
};

export default (state=initialState, action) => {
  switch (action.type) {
    case "MY_STAMPS":
      console.log(action);
      return {
        ...state,
        my: action.payload.stamps,
      };
    default:
      return state;
  }
};
