import { GroupPermissionTypes } from "../constant/group-permisssion-type";

// (state, action) --------destructure action------> (state, {type, payload})  -----------
export const GroupPermissionReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GroupPermissionTypes.GET_GROUP_PERMISSION_REQUEST:
      return (state = { ...state, loading: true });
    case GroupPermissionTypes.GET_GROUP_PERMISSION_SUCCESS:
      console.log(payload.data)
      return (state = {
        ...state,
        loading: false,
        group_permission_data: payload.data,
      });
    case GroupPermissionTypes.GET_GROUP_PERMISSION_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
        message: payload.error.errText,
        group_permission_data: [],
      };

    case GroupPermissionTypes.UPDATE_GROUP_PERMISSION_REQUEST:
      return (state = { ...state, loading: true });
    case GroupPermissionTypes.UPDATE_GROUP_PERMISSION_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        group_permission_data: payload.data,
      });
    case GroupPermissionTypes.UPDATE_GROUP_PERMISSION_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
        message: payload.error.errText,
        group_permission_data: [],
      };
     default:
        return state;
  }
  
};
