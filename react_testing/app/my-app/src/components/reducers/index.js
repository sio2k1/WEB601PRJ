import { combineReducers } from "redux";
//import visibilityFilter from "./visibilityFilter";
import login_reducer from "../login/login_reducer";

export default combineReducers({ login_reducer });