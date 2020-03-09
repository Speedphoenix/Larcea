import {CALL_API} from "../action-types"

//Leos CallAPI function used as an action
export function callAPI (){
    return function (dispatch){
        return fetch("http://localhost:4001/test")
            .then(res => res.text())
            .then(res => {
                dispatch ({ type: CALL_API, payload: res })
            })
            .catch(err => err);
    }
}