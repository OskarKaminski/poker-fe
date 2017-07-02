import {combineReducers} from 'redux';
import {firebaseStateReducer} from 'react-redux-firebase'
import {routerReducer} from 'react-router-redux'
import {tablesReducer} from './tables/tables-reducer';
// import {routerReducer} from 'react-router-redux'

export const rootReducer = combineReducers({
    firebase: firebaseStateReducer,
    // router: routerReducer,
    tables: tablesReducer
});
