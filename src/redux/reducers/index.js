import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { variantsReducer } from "./variantsReducer";
import initialState from "./initialState";

const rootReducers = combineReducers({
  authState: authReducer,
  variants: variantsReducer,
});

const reducers = function combinedRootReducer(state, action) {
  return action.type === "LOGOUT_SUCCESS"
    ? rootReducers(initialState, action)
    : rootReducers(state, action);
};
export default reducers;
