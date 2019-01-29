import {
  SET_HEADER_TITLE,
  SHOW_LOGIN_POP,
  SET_USERS_DETAIL
} from "../typeConstants";
export const setHeaderTitle = title => {
  return {
    type: SET_HEADER_TITLE,
    title
  };
};
export const showLoginPop = status => {
  return {
    type: SHOW_LOGIN_POP,
    status
  };
};
export const checkForUser = () => {
  let usersData = JSON.parse(localStorage.getItem("tuser"));
  let returnObj = { type: "USER" };
  if (usersData) {
    returnObj = { type: SET_USERS_DETAIL, usersData };
  }
  return returnObj;
};
const createUserDataFromFacebook = userData => {
  return {
    name: userData.name
  };
};
const createUserDataFromGoogle = userData => {
  return {
    name: userData.profileObj.name,
    accessToken: userData.accessToken,
    image: userData.profileObj.imageUrl,
    email: userData.profileObj.email
  };
};
export const setUserDetails = (userData, type) => {
  let usersData = {};
  if (type === "facebook") {
    usersData = createUserDataFromFacebook(userData);
  } else {
    usersData = createUserDataFromGoogle(userData);
  }
  localStorage.setItem("tuser", JSON.stringify(usersData));
  return dispatch => {
    dispatch({ type: SET_USERS_DETAIL, usersData });
  };
};
