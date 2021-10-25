import axios from "../../helper/axios";
import { ActionTypes } from "../constant/action-type";
import { toast } from "react-toastify";

export const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOGIN_REQUEST, payload: user });
    const res = await axios.post(`/vendor/auth/login`, { ...user });
    if (res.status === 200) {
      const token = res.data.data.auth_token;
      const user = res.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      toast("login success!", { type: "success", autoClose: 3000 });

      dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: { token, user } });
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: ActionTypes.LOGIN_FAILER,
      payload: { error },
    });
  }
};

export const signup = (user) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.SIGNUP_REQUEST });
    const res = await axios.post(`/vendor/auth/register`, {
      ...user, // Spread oprater
    });

    if (res.status === 200) {
      const { message } = res.data;
      toast("Registration success!", { type: "success", autoClose: 3000 });
      dispatch({ type: ActionTypes.SIGNUP_SUCCESS, payload: { message } });
    } else {
      const { message } = res.data;
      if (res.status === 400) {
        dispatch({ type: ActionTypes.SIGNUP_FAILED, payload: { message } });
      }
      if (res.status === 422) {
        dispatch({ type: ActionTypes.SIGNUP_FAILED, payload: { message } });
      }
      dispatch({ type: ActionTypes.SIGNUP_FAILED, payload: { message } });
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: ActionTypes.LOGIN_FAILER,
      payload: { error },
    });
  }
};

export const isUserLogedIn = () => async (dispatch) => {
  const token = window.localStorage.getItem("token");
  if (token) {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: { token, user } });
  } else {
    dispatch({
      type: ActionTypes.LOGIN_FAILER,
      payload: { error: "Login failed" },
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOGOUT_REQUEST });
    const res = await axios.put(`/vendor/auth/logout`);
    if (res.status === 200) {
      dispatch({ type: ActionTypes.LOGOUT_SUCCESS, payload: res });
    }
  } catch (error) {
    dispatch({ type: ActionTypes.LOGOUT_FAILED, payload: error });
  }
};
