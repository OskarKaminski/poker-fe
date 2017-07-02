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

const initState = {};
export const store = createStore(
    rootReducer,
    initState,
    compose(
        devtools,
        reactReduxFirebase(config),
        applyMiddleware(interceptorMiddleware)
    )
);