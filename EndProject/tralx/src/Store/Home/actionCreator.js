import { ImagesApi } from "../apis";
export const getImages = () => {
  return dispatch => {
    return fetch(ImagesApi)
      .then(res => res.json())
      .then(images => dispatch({ type: "SET_IMAGES", images: images.hits }));
  };
};
