import {combineReducers} from 'redux';
import {currentTableReducer} from '../current-table/current-table.reducer'
import {balanceReducer} from './balance.reducer'

const profileReducer = (state = {}, action) => {
    switch(action.type){
        case 'USER_PROFILE_UPDATED':
            return action.payload
    }
    return state;
}
const userIdReducer = (state = {}, action) => {
    switch(action.type){
        case 'AUTH_STATE_CHANGED':
            return action.payload.uid;
    }
    return state;
}

export const playerReducer = combineReducers({
    uid: userIdReducer,
    profile: profileReducer,
    balance: balanceReducer,
    currentTable: currentTableReducer
});