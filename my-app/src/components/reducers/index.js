import { combineReducers } from "redux";
//import visibilityFilter from "./visibilityFilter";
import login_reducer from "../login/redux_login_reducer";
import routing_navi_reducer from "../routing/redux_routingnavi_reducer"
export default combineReducers({
    login_reducer,routing_navi_reducer
})