import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import {tablesReducer} from './tables/tables-reducer';
import {authReducer} from './auth/auth.reducer';
import {userReducer} from './user/user.reducer';

export const rootReducer = combineReducers({
    router: routerReducer,
    tables: tablesReducer,
    auth: authReducer,
    user: userReducer
});
