import { ItemCategoryTypes } from "../constant/category-action-type";
import initialState from "./initialState";

// (state, action) --------destructure action------> (state, {type, payload})  -----------
export const StoreCategoryReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ItemCategoryTypes.GET_STORE_CATEGORY_REQUEST:
      return (state = { ...state, loading: true });
    case ItemCategoryTypes.GET_STORE_CATEGORY_SUCCESS:
      return (state = {
        ...state,
        payload,
        loading: false,
      });
    case ItemCategoryTypes.GET_STORE_CATEGORY_FAILED:
      return {
        ...state,
        error: payload.error,
        message: payload.error.errText,
        loading: false,
      };
    default:
      return state;
  }
};
