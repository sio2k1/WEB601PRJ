/* Combine all reducers in this file for using redux */
import { combineReducers } from "redux";
import login_reducer from "../login/redux_login_reducer";
import routing_navi_reducer from "../routing/redux_routingnavi_reducer"
export default combineReducers({
    login_reducer,routing_navi_reducer
})