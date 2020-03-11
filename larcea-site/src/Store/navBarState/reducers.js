import {TOGGLE_DRAWER} from "../action-types";

// default state
const defaultState = {
    drawerOpened: false
}

export const NavBarReducer = (state = defaultState, action) => {
    switch (action.type) {
        case (TOGGLE_DRAWER):
            console.log(action.payload)
            return {
                ...state,
                //updating our state
                drawerOpened: action.payload
            };
    }
    return state;
}