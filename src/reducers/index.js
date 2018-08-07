import { combineReducers } from "redux";
import auth from "./auth";
import stamps from "./stamps";

export default combineReducers({
  auth,
  stamps,
});
