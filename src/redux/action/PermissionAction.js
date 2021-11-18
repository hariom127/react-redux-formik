import axios from "../../helper/axios";
import { PermissionTypes } from "../constant/permission-action-type";
import { toast } from "react-toastify";

export const getPermissions = () => async (dispatch) => {
  try {
    dispatch({ type: PermissionTypes.GET_PERMISSION_REQUEST });
    const res = await axios.get(`/vendor/permissions`);
    if (res.status === 200) {
       const data = res.data.data.docs;
      dispatch({ type: PermissionTypes.GET_PERMISSION_SUCCESS, payload: { data } });
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: PermissionTypes.GET_PERMISSION_FAILED,
      payload: { error },
    });
  }
};

export const updatePermissions = (id,requestData) => async (dispatch) => {
  try {
    console.log("action req data", requestData);
    dispatch({ type: PermissionTypes.UPDATE_PERMISSION_REQUEST });
    const res = await axios.put(`/vendor/permissions/permission` +"/"+id, requestData);
    if (res.status === 200) {
       toast(res.data.message, { type: "success", autoClose: 3000 });
      const data = res.data;
      dispatch({
        type: PermissionTypes.UPDATE_PERMISSION_SUCCESS,
        payload: { data },
      });
      dispatch(getPermissions());
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: PermissionTypes.UPDATE_PERMISSION_FAILED,
      payload: { error },
    });
  }
};
export const addPermissions = (requestData) => async (dispatch) => {
  try {
      console.log(requestData)
   dispatch({ type: PermissionTypes.ADD_PERMISSION_REQUEST });
    const res = await axios.post(`/vendor/permissions/permission`, requestData);
    if (res.status === 200) {
      toast(res.data.message, { type: "success", autoClose: 3000 });
      const data = res.data;
      dispatch({
        type: PermissionTypes.ADD_PERMISSION_SUCCESS,
        payload: { data },
      });
      dispatch(getPermissions());
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: PermissionTypes.ADD_PERMISSION_FAILED,
      payload: { error },
    });
  }
};
