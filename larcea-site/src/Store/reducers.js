import { combineReducers } from 'redux';
import {callApiReducer} from './appState/reducers'

export default combineReducers({
    //Name of ur reducer fct: name u assign to it to use in future components
    responseAPI:callApiReducer

});