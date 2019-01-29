import { GET_IMAGES_FOR_HOME_SERVICES } from "../typeConstants";
const initialState = {
  images: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES_FOR_HOME_SERVICES: {
      return {
        ...state,
        images: action.images.hits
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
};
