import _ from 'lodash';
import {combineReducers} from 'redux';
import actions from '../actions';
import {balanceReducer} from './balance.reducer'

export const profileReducer = (state = {}, action) => {
    switch(action.type){
        case actions.user.updated:
            return action.payload
    }
    return state;
}
export const userIdReducer = (state = {}, action) => {
    switch(action.type){
        case actions.auth.updated:
            return action.payload.uid;
    }
    return state;
}
export const userSeatReducer = (state = null, action) => {
    switch(action.type){
        case actions.user.checkSeatNumber:
            const seat = _.find(action.table.seats, {player: {id: action.userId}});
            return seat && seat.no || null;
    }
    return state;
}

export const userReducer = combineReducers({
    uid: userIdReducer,
    profile: profileReducer,
    balance: balanceReducer,
    seat: userSeatReducer,
});