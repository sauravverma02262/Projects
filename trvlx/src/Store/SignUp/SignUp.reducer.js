import { VALIDATE_SIGNUP_FORM, UPDATE_SIGNUP_FIELD } from "../typeConstants";
const getSignUpFields = () => {
  return {
    name: "Saurav",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: ""
  };
};
const initialState = {
  signUpForm: getSignUpFields()
};
export default (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_SIGNUP_FORM: {
      return {
        ...state,
        signUpForm: action.userDetails
      };
    }
    case UPDATE_SIGNUP_FIELD: {
      let signUp = state.signUpForm;
      signUp[action.field] = action.value;
      return {
        ...state,
        signUpForm: signUp
      };
    }

    default:
      return {
        ...state
      };
  }
};
