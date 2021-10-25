import { ActionTypes } from "../constant/action-type";

const initialState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country_code: "",
    profile: "",
    store_location: "",
    latitude: "",
    longitude: "",
    device_token: "",
    device_type: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};
// (state, action) --------destructure action------> (state, {type, payload})  -----------
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_REQUEST:
      return (state = { ...state, loading: true, authenticating: true });
    case ActionTypes.LOGIN_SUCCESS:
      return (state = {
        ...state,
        user: payload.user,
        token: payload.token,
        authenticate: true,
        loading: false,
        authenticating: false,
      });
    case ActionTypes.LOGIN_FAILER:
      return {
        ...state,
        error: payload.error,
        message: payload.error.errText,
        authenticating: false,
        loading: false,
        authenticate: false,
      };
    case ActionTypes.LOGOUT_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case ActionTypes.LOGOUT_SUCCESS:
      window.localStorage.clear();
      return (state = {
        ...initialState,
        loading: false,
      });

    case ActionTypes.LOGOUT_FAILED:
      return (state = {
        ...state,
        error: payload.error,
        loading: false,
      });
    case ActionTypes.SIGNUP_REQUEST:
      return (state = { ...state, loading: true });

    case ActionTypes.SIGNUP_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        message: payload.message,
      });
    case ActionTypes.SIGNUP_FAILED:
      return (state = {
        ...initialState,
        loading: false,
        error: "Signup failed",
      });

    default:
      return state;
  }
};
