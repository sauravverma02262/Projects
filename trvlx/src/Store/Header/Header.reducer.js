import {
  SET_HEADER_TITLE,
  SHOW_LOGIN_POP,
  SET_USERS_DETAIL
} from "../typeConstants";
import { TopMenu, FooterData } from "../Data";
const initialState = {
  title: "App",
  appName: "TrvlX",
  rightMenu: TopMenu,
  user: {
    details: {},
    isLoggedIn: false
  },
  footer: FooterData,
  showLoginPop: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_TITLE: {
      return {
        ...state,
        title: action.title
      };
    }
    case SHOW_LOGIN_POP: {
      return {
        ...state,
        showLoginPop: action.status
      };
    }
    case SET_USERS_DETAIL: {
      return {
        ...state,
        showLoginPop: false,
        user: {
          ...state.user,
          details: action.usersData,
          isLoggedIn: true
        }
      };
    }

    default:
      return {
        ...state
      };
  }
};
