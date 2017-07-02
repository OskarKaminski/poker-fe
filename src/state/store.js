import {createStore, applyMiddleware, compose} from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase'
import {rootReducer} from './reducers';
import {config} from 'Adapter/firebase.config';

let devtools = window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

const createStoreWithFirebase = compose(
    reactReduxFirebase(config, {enableLogging: false}),
)(createStore)

export const store = createStoreWithFirebase(rootReducer, devtools)