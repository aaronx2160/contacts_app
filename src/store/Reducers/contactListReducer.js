import {SET_CONTACT_EDIT, SET_CONTACT_LIST, SET_KEYWORD} from "../consts";
import React from "react";

const initState = {
    contactList:[],
    contact_edit:{},
    keyword:""
}

export const contactListReducer = (state= initState, action)=>{
    switch (action.type) {
        case SET_CONTACT_LIST:
            return Object.assign(state,{contactList:action.payload})
        case SET_CONTACT_EDIT:
            return Object.assign(state,{contact_edit:action.payload})
        case SET_KEYWORD:
            return Object.assign(state,{keyword:action.payload})
        default:
            return state
    }
}