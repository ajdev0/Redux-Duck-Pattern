import { combineReducers } from "redux";
import bugReducer from "./bugs";
import userReducer from "./auth";
import projectReducer from "./projects";

export default combineReducers({
  bugs: bugReducer,
  projects: projectReducer,
  users: userReducer,
});
