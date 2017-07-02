import {createStore, applyMiddleware, compose} from 'redux';
import {reducers} from './reducers';

let devtools = window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

export const store = createStore(reducers, devtools);
