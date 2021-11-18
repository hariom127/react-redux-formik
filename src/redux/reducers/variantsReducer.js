import { ActionTypes } from "../constant/action-type";

export const variantsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_VARIANTS:
      return (state = {
        ...state,
        loading: true,
      });
    case ActionTypes.FETCH_VARIANTS_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        variants: payload.variants.data.docs || [],
      });
    case ActionTypes.FETCH_VARIANTS_FAILED:
      return (state = {
        ...state,
        loading: false,
        error: "Store type not loaded!",
      });
    default:
      return state;
  }
};
