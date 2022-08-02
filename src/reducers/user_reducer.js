import {
  START_INPUT,
  START_SUBMIT,
  SUCCESS_SUBMIT,
  ERROR_SUBMIT,
} from "../action";

const user_reducer = (state, action) => {
  switch (action.type) {
    case START_INPUT:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case START_SUBMIT:
      return { ...state, loading: true, error: false, error_message: "" };
    case SUCCESS_SUBMIT:
      return {
        ...state,
        loading: false,
        email: "",
        password: "",
        confirmPassword: "",
      };
    case ERROR_SUBMIT:
      return {
        ...state,
        loading: false,
        error: true,
        error_message: action.payload,
      };
    case "unsubsribe":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default user_reducer;
