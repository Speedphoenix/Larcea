import {CALL_API} from "../action-types";

//App default state
const defaultState = {
    response: ""
}

export const callApiReducer = (state = defaultState, action) => {
    switch (action.type){
        //we may have several actions for the same reducer
        case (CALL_API):
            return {
                //redux logic wants u to copy entirely the ancient state first before updating it
                ...state,
                //updating our state
                response : action.payload
            };
    }
    return state;
}