import { VALIDATE_SIGNUP_FORM, UPDATE_SIGNUP_FIELD } from "../typeConstants";
export const addUser = userDetails => {
  return {
    type: VALIDATE_SIGNUP_FORM,
    userDetails
  };
};

export const updateSignUpFields = ({ field, value }) => {
  return {
    type: UPDATE_SIGNUP_FIELD,
    field,
    value
  };
};
