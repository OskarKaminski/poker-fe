import {createStore, applyMiddleware, compose} from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase'
import {rootReducer} from './reducers';
import {config} from 'Adapter/firebase.config';
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'

const devtools = window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;
const history = createHistory()
const interceptorMiddleware = routerMiddleware(history)
const authConfig = {
    userProfile: 'users', // firebase root where user profiles are stored
    enableLogging: false, // enable/disable Firebase's database logging
}

const initState = {};
export const store = createStore(
    rootReducer,
    initState,
    compose(
        devtools,
        reactReduxFirebase(config, authConfig),
        applyMiddleware(interceptorMiddleware)
    )
);