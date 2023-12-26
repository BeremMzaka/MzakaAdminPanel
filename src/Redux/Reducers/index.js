import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { deleteReducer } from "./deleteReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  deleteReducer:deleteReducer,
});

export default rootReducer;
