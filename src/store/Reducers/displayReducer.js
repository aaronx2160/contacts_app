import {SWITCH_DISPLAY} from "../consts";

const initState = {display:"home"}

export const displayReducer = (state= initState, action)=>{
    switch (action.type) {
        case SWITCH_DISPLAY:
            return {display: action.payload}
        default:
            return state
    }
}