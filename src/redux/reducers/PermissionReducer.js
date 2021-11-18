import { PermissionTypes } from "../constant/permission-action-type";

// (state, action) --------destructure action------> (state, {type, payload})  -----------
export const PermissionReducer = (state = [], { type, payload }) => {
  switch (type) {
    case PermissionTypes.GET_PERMISSION_REQUEST:
      return (state = { ...state, loading: true });
    case PermissionTypes.GET_PERMISSION_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        permission_data: payload.data,
      });
    case PermissionTypes.GET_PERMISSION_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
        message: payload.error.errText,
        permission_data: [],
      };

    case PermissionTypes.UPDATE_PERMISSION_REQUEST:
      return (state = { ...state, loading: true });
    case PermissionTypes.UPDATE_PERMISSION_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        permission_data: payload.data,
      });
    case PermissionTypes.UPDATE_PERMISSION_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
        message: payload.error.errText,
        permission_data: [],
      };
      
      case PermissionTypes.ADD_PERMISSION_REQUEST:
        return (state = { ...state, loading: true });
      case PermissionTypes.ADD_GROUP_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        permission_data: payload.data,
      });
      case PermissionTypes.ADD_PERMISSION_FAILED:
        return {
          ...state,
          loading: false,
          error: payload.error,
          message: payload.error.errText,
          permission_data: [],
        };
      default:
        return state;
  }
  
};
