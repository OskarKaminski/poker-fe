import {combineReducers} from 'redux';
import {firebaseStateReducer} from 'react-redux-firebase'
import {tablesReducer} from './tables/tables-reducer';

export const rootReducer = combineReducers({
    firebase: firebaseStateReducer,
    tables: tablesReducer
});
