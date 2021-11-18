import axios from "../../helper/axios";
import { BankTypes } from "../constant/setting-action-type";
import { toast } from "react-toastify";

export const updateBankDetail = (requestData) => async (dispatch) => {
  try {
    dispatch({ type: BankTypes.UPDATE_BANK_REQUEST });
    const res = await axios.put(`/vendor/profile/bank-detail`, {
      ...requestData, // Spread oprater
    });
    if (res.status === 200) {
      dispatch({ type: BankTypes.UPDATE_BANK_SUCCESS, payload: {} });
      toast("Bank Update Successful", {
        type: "success",
        autoClose: 3000,
      });
    }
  } catch (error) {
    // toast(error.message, { type: "error", autoClose: 3000 });
    dispatch({
      type: BankTypes.UPDATE_BANK_FAILED,
      payload: { error },
    });
  }
};
