import { SettingTypes } from "../constant/setting-action-type";

// (state, action) --------destructure action------> (state, {type, payload})  -----------
export const StoreSettingReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SettingTypes.GET_SETTING_REQUEST:
      return (state = { ...state, loading: true });
    case SettingTypes.GET_SETTING_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        setting_data: payload.data,
      });
    case SettingTypes.GET_SETTING_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
        message: payload.error.errText,
        setting_data: [],
      };
    case SettingTypes.UPDATE_SETTING_REQUEST:
      return (state = { ...state, loading: true });
    case SettingTypes.UPDATE_SETTING_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        setting_data: payload.data,
      });
    case SettingTypes.UPDATE_SETTING_FAILED:
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
