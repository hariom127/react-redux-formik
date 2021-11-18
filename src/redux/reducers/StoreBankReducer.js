import { BankTypes } from "../constant/setting-action-type";

// (state, action) --------destructure action------> (state, {type, payload})  -----------
export const StoreBankReducer = (state = [], { type, payload }) => {
  switch (type) {
    case BankTypes.UPDATE_BANK_REQUEST:
      return (state = { ...state, loading: true });
    case BankTypes.UPDATE_BANK_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        setting_data: payload,
      });
    case BankTypes.UPDATE_BANK_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
        message: payload.error.errText,
        setting_data: [],
      };
    default:
      return state;
  }
};
