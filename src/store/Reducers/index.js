import {combineReducers} from "redux";
import {displayReducer} from "./displayReducer";
import {contactListReducer} from "./contactListReducer";

export default combineReducers({
    display:displayReducer,
    dataList:contactListReducer
})