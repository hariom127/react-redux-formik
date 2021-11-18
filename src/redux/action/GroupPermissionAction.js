import axios from "../../helper/axios";
import { GroupPermissionTypes } from "../constant/group-permisssion-type";
import { toast } from "react-toastify";

export const getGroupPermissions = () => async (dispatch) => {
  try {
    dispatch({ type: GroupPermissionTypes.GET_GROUP_PERMISSION_REQUEST });
    const res = await axios.get(`/vendor/permissions/list`);
    if (res.status === 200) {
       const data = res.data.data.docs;
       dispatch({ type: GroupPermissionTypes.GET_GROUP_PERMISSION_SUCCESS, payload: { data } });
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: GroupPermissionTypes.GET_GROUP_PERMISSION_FAILED,
      payload: { error },
    });
  }
};

export const updateGroupPermissions = (requestData) => async (dispatch) => {
  try {
     dispatch({ type: GroupPermissionTypes.UPDATE_GROUP_PERMISSION_REQUEST });
    const res = await axios.post(`/vendor/permissions/group-permission`, requestData);
 console.log(requestData)
    if (res.status === 200) {
       toast(res.data.message, { type: "success", autoClose: 3000 });
      const data = res.data;
      dispatch({
        type: GroupPermissionTypes.UPDATE_GROUP_PERMISSION_SUCCESS,
        payload: { data },
      });
      dispatch(getGroupPermissions());
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: GroupPermissionTypes.UPDATE_GROUP_PERMISSION_FAILED,
      payload: { error },
    });
  }


};
