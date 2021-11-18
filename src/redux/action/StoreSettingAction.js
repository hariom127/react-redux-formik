import axios from "../../helper/axios";
import {
  SettingTypes,
  OwnerProfileTypes,
} from "../constant/setting-action-type";
import { toast } from "react-toastify";

export const getStoreSetting = () => async (dispatch) => {
  try {
    dispatch({ type: SettingTypes.GET_SETTING_REQUEST });
    const res = await axios.get(`/vendor/store-settings`);
    if (res.status === 200) {
      const data = res.data.data;
      dispatch({ type: SettingTypes.GET_SETTING_SUCCESS, payload: { data } });
    }
  } catch (error) {
    // toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: SettingTypes.GET_SETTING_FAILED,
      payload: { error },
    });
  }
};

export const updateStoreSetting = (requestData) => async (dispatch) => {
  try {
    console.log("action req data", requestData);
    dispatch({ type: SettingTypes.UPDATE_SETTING_REQUEST });
    const res = await axios.put(`/vendor/store-settings`, requestData);
    if (res.status === 200) {
      const data = res.data;
      dispatch({
        type: SettingTypes.UPDATE_SETTING_SUCCESS,
        payload: { data },
      });
      dispatch(getStoreSetting());
      toast("Profile updated successfully", {
        type: "success",
        autoClose: 3000,
      });
    }
  } catch (error) {
    // toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: SettingTypes.UPDATE_SETTING_FAILED,
      payload: { error },
    });
  }
};

export const updateStoreOwnerProfile = (requestData) => async (dispatch) => {
  try {
    console.log("action req data", requestData);
    dispatch({ type: OwnerProfileTypes.UPDATE_OWNER_PROFILE_REQUEST });
    const res = await axios.put(`/vendor/profile`, requestData);
    if (res.status === 200) {
      const data = res.data;
      dispatch({
        type: OwnerProfileTypes.UPDATE_OWNER_PROFILE_SUCCESS,
        payload: { data },
      });
      dispatch(getStoreSetting());
      toast("Profile updated successfully", {
        type: "success",
        autoClose: 3000,
      });
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: OwnerProfileTypes.UPDATE_OWNER_PROFILE_FAILED,
      payload: { error },
    });
  }
};
