import axios from "../../helper/axios";
import { ItemCategoryTypes } from "../constant/category-action-type";
import { toast } from "react-toastify";

export const fetchItemsAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: ItemCategoryTypes.GET_CATEGORY_REQUEST });
    const res = await axios.get(`/vendor/all/categories`);
    if (res.status === 200) {
      const data = res.data.data;
      dispatch({
        type: ItemCategoryTypes.GET_CATEGORY_SUCCESS,
        payload: { data },
      });
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: ItemCategoryTypes.GET_CATEGORY_FAILED,
      payload: { error },
    });
  }
};

export const fetchCategoriesByStore = (storeId) => async (dispatch) => {
  try {
    if (storeId) {
      dispatch({ type: ItemCategoryTypes.GET_STORE_CATEGORY_REQUEST });
      const res = await axios.get(`/customer/products/categories/${storeId}`);
      if (res.status === 200) {
        const data = res.data.data;
        dispatch({
          type: ItemCategoryTypes.GET_STORE_CATEGORY_SUCCESS,
          payload: { data },
        });
      }
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: ItemCategoryTypes.GET_STORE_CATEGORY_FAILED,
      payload: { error },
    });
  }
};
