import { GET_IMAGES_FOR_HOME_SERVICES } from "../typeConstants";
import { IMAGE_API } from "../apis";
export const getServiceImages = () => {
  return dispatch => {
    fetch(IMAGE_API)
      .then(res => res.json())
      .then(images => dispatch({ type: GET_IMAGES_FOR_HOME_SERVICES, images }));
  };
};
