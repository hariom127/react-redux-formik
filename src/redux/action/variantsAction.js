import axios from "../../helper/axios";
import { ActionTypes } from "../constant/action-type";
import { toast } from "react-toastify";

export const fetchVariants = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.FETCH_VARIANTS });
    const res = await axios.get(`/vendor/all/categories`);
    if (res.status === 200) {
      dispatch({
        type: ActionTypes.FETCH_VARIANTS_SUCCESS,
        payload: { variants: res.data },
      });
    }
  } catch (error) {
    toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: ActionTypes.FETCH_VARIANTS_FAILED,
      payload: { error },
    });
  }
};
