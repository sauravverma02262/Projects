const initialState = {
  images: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return {
        ...state,
        images: action.images
      };

    default:
      return state;
  }
};
