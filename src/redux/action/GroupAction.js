import axios from "../../helper/axios";
import { GroupTypes } from "../constant/group-action-type";
import { toast } from "react-toastify";

export const getGroups = () => async (dispatch) => {
  try {
    dispatch({ type: GroupTypes.GET_GROUP_REQUEST });
    const res = await axios.get(`/vendor/groups`);
    if (res.status === 200) {
       const data = res.data.data.docs;
      dispatch({ type: GroupTypes.GET_GROUP_SUCCESS, payload: { data } });
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: GroupTypes.GET_GROUP_FAILED,
      payload: { error },
    });
  }
};

export const updateGroups = (id,requestData) => async (dispatch) => {
  try {
    console.log("action req data", requestData);
    dispatch({ type: GroupTypes.UPDATE_GROUP_REQUEST });
    const res = await axios.put(`/vendor/groups/group` +"/"+id, requestData);
    if (res.status === 200) {
       toast(res.data.message, { type: "success", autoClose: 3000 });
      const data = res.data;
      dispatch({
        type: GroupTypes.UPDATE_GROUP_SUCCESS,
        payload: { data },
      });
      dispatch(getGroups());
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: GroupTypes.UPDATE_GROUP_FAILED,
      payload: { error },
    });
  }
};
export const addGroups = (requestData) => async (dispatch) => {
  try {
   dispatch({ type: GroupTypes.ADD_GROUP_REQUEST });
    const res = await axios.post(`/vendor/groups/group`, requestData);
    if (res.status === 200) {
      toast(res.data.message, { type: "success", autoClose: 3000 });
      const data = res.data;
      dispatch({
        type: GroupTypes.ADD_GROUP_SUCCESS,
        payload: { data },
      });
      dispatch(getGroups());
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: GroupTypes.ADD_GROUP_FAILED,
      payload: { error },
    });
  }
};
export const getGroup = (id) => async (dispatch) => {
  try {
    dispatch({ type: GroupTypes.GET_GROUP_ONE_REQUEST });
    const res = await axios.get(`/vendor/groups/group`+"/"+id);
    if (res.status === 200) {
       const data = res.data.data;
      dispatch({ type: GroupTypes.GET_GROUP_ONE_SUCCESS, payload: { data } });
    }
   } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: GroupTypes.GET_GROUP_ONE_FAILED,
      payload: { error },
    });
  }
};
