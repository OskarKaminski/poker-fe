import {combineReducers} from 'redux';
import actions from '../actions';
import {balanceReducer} from './balance.reducer'

const profileReducer = (state = {}, action) => {
    switch(action.type){
        case actions.user.updated:
            return action.payload
    }
    return state;
}
const userIdReducer = (state = {}, action) => {
    switch(action.type){
        case actions.auth.updated:
            return action.payload.uid;
    }
    return state;
}

export const userReducer = combineReducers({
    uid: userIdReducer,
    profile: profileReducer,
    balance: balanceReducer,
});