import { ItemTypes } from "../constant/item-action-type";
import initialState from "./initialState";

// (state, action) --------destructure action------> (state, {type, payload})  -----------
export const ItemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ItemTypes.GET_ITEM_REQUEST:
      return (state = { ...state, loading: true });
    case ItemTypes.GET_ITEM_SUCCESS:
      return (state = {
        ...state,
        payload,
        loading: false,
      });
    case ItemTypes.GET_ITEM_FAILED:
      return {
        ...state,
        error: payload.error,
        message: payload.error.errText,
        loading: false,
      };
    case ItemTypes.SAVE_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        form_clean: false,
      };
    case ItemTypes.SAVE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        form_clean: true,
      };
    case ItemTypes.SAVE_ITEM_FAILED:
      return {
        ...state,
        loading: false,
        form_clean: false,
      };

    default:
      return state;
  }
};
