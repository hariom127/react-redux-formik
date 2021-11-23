import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { variantsReducer } from "./variantsReducer";
import { StoreSettingReducer } from "./StoreSettingReducer";
import { StoreBankReducer } from "./StoreBankReducer";
import { ItemReducer } from "./ItemReducer";
import { GroupReducer } from "./GroupReducer";
import { PermissionReducer } from "./PermissionReducer";
import { GroupPermissionReducer } from "./GroupPermissionReducer";
import { ItemCategoryReducer } from "./ItemCategoryReducer";
import { StoreCategoryReducer } from "./StoreCategoryReducer";
import initialState from "./initialState";

const rootReducers = combineReducers({
  authState: authReducer,
  variants: variantsReducer,
  StoreSettingReducer,
  StoreBankReducer,
  ItemReducer,
  GroupReducer,
  PermissionReducer,
  GroupPermissionReducer,
  ItemCategoryReducer,
  StoreCategoryReducer,
});

const reducers = function combinedRootReducer(state, action) {
  return action.type === "LOGOUT_SUCCESS"
    ? rootReducers(initialState, action)
    : rootReducers(state, action);
};
export default reducers;
