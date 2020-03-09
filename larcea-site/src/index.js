import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContainer from './Components/Containers/AppContainer'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import * as serviceWorker from './serviceWorker';

//Redux imports

import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./Store/reducers";
import thunk from "redux-thunk";

//Initialising Redux Store
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)) );


ReactDOM.render(
    <Provider store = {store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
