import axios from "../../helper/axios";
import { ItemTypes } from "../constant/item-action-type";
import { toast } from "react-toastify";
import { getStoreSetting } from "./StoreSettingAction";

export const fetchItems = () => async (dispatch) => {
  try {
    dispatch({ type: ItemTypes.GET_ITEM_REQUEST });
    const res = await axios.get(`/vendor/products?page_no=1&limit=50`);
    if (res.status === 200) {
      const data = res.data.data;
      dispatch({ type: ItemTypes.GET_ITEM_SUCCESS, payload: { data } });
      dispatch(getStoreSetting());
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: ItemTypes.GET_ITEM_FAILED,
      payload: { error },
    });
  }
};

export const addItem = (requestData) => async (dispatch) => {
  try {
    dispatch({ type: ItemTypes.SAVE_ITEM_REQUEST });
    const res = await axios.post(`/vendor/products`, requestData);
    if (res.status === 200) {
      dispatch({ type: ItemTypes.SAVE_ITEM_SUCCESS, payload: {} });
      toast("Item has been added successfully", {
        type: "success",
        autoClose: 3000,
      });
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: ItemTypes.SAVE_ITEM_FAILED,
      payload: { error },
    });
  }
};

export const deleteItem = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: ItemTypes.DELETE_ITEM_REQUEST });
    const res = await axios.delete(`/vendor/products/${itemId}`);
    if (res.status === 200) {
      dispatch({ type: ItemTypes.DELETE_ITEM_SUCCESS, payload: {} });
      toast("Item has been deleted successfully", {
        type: "success",
        autoClose: 3000,
      });
    }
    dispatch(fetchItems());
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: ItemTypes.DELETE_ITEM_FAILED,
      payload: { error },
    });
  }
};

export const updateItemStatus = (requestData) => async (dispatch) => {
  try {
    dispatch({ type: ItemTypes.UPDATE_ITEM_STATUS_REQUEST });
    const res = await axios.put(`/vendor/products/status/${requestData.id}`, {
      is_active: requestData.is_active,
    });
    if (res.status === 200) {
      dispatch({ type: ItemTypes.UPDATE_ITEM_STATUS_SUCCESS, payload: {} });
      toast("Status has been updated successfully", {
        type: "success",
        autoClose: 3000,
      });
    }
    dispatch(fetchItems());
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: ItemTypes.DELETE_ITEM_FAILED,
      payload: { error },
    });
  }
};
