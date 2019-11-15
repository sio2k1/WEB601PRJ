/* Combine all reducers in this file for using redux */
import { combineReducers } from "redux";
import login_reducer from "../login/reducers/reducers";
import routing_navi_reducer from "../routing/reducers/reducers"
export default combineReducers({
    login_reducer, 
    routing_navi_reducer
})