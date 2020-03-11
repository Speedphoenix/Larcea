import { combineReducers } from 'redux';
import {callApiReducer} from './appState/reducers'
import {NavBarReducer} from "./navBarState/reducers";

export default combineReducers({
    //Name of ur reducer fct: name u assign to it to use in future components
    responseAPI:callApiReducer,
    navBarElementState: NavBarReducer

});