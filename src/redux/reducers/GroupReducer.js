import { GroupTypes } from "../constant/group-action-type";

// (state, action) --------destructure action------> (state, {type, payload})  -----------
export const GroupReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GroupTypes.GET_GROUP_REQUEST:
      return (state = { ...state, loading: true });
    case GroupTypes.GET_GROUP_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        group_data: payload.data,
      });
    case GroupTypes.GET_GROUP_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
        message: payload.error.errText,
        group_data: [],
      };

    case GroupTypes.UPDATE_GROUP_REQUEST:
      return (state = { ...state, loading: true });
    case GroupTypes.UPDATE_GROUP_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        group_data: payload.data,
      });
    case GroupTypes.UPDATE_GROUP_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
        message: payload.error.errText,
        group_data: [],
      };
      
      case GroupTypes.ADD_GROUP_REQUEST:
        return (state = { ...state, loading: true });
      case GroupTypes.ADD_GROUP_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        group_data: payload.data,
      });
      case GroupTypes.ADD_GROUP_FAILED:
        return {
          ...state,
          loading: false,
          error: payload.error,
          message: payload.error.errText,
          group_data: [],
        };
     case GroupTypes.GET_GROUP_ONE_REQUEST:
      return (state = { ...state, loading: true });
    case GroupTypes.GET_GROUP_ONE_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        group_data_one: payload.data,
      });
    case GroupTypes.GET_GROUP_ONE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
        message: payload.error.errText,
        group_data_one: [],
      };
      default:
        return state;
  }
  
};
