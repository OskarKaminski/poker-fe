import {combineReducers} from 'redux';
import _ from 'lodash';

export const tableInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CURRENT_TABLE_UPDATED':
            return _.pick(action.payload, ['id', 'name', 'numOfSeats', 'stake']);
    }
    return state;
}

export const seatReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LEAVES_SEAT':
            if(state.no === action.seatNo){
                return {
                    ...state,
                    user: null,
                    balance: null,
                    status: 0,
                    cards: null
                }
            }
            break;
        case 'USER_JOINS_SEAT':
            if(state.no === action.seatNo){
                return {
                    ...state,
                    user: action.user,
                    balance: action.topUp,
                    status: 2,
                    cards: null
                }
            }
            break;
    }
    return state;
}

export const seatsReducer = (state = [], action) => {
    switch (action.type) {
        case 'CURRENT_TABLE_UPDATED':
            return action.payload.seats;
        case 'USER_LEAVES_SEAT':
            return _.map(state, seat => seatReducer(seat, action));
        case 'USER_JOINS_SEAT':
            return _.map(state, seat => seatReducer(seat, action));
    }
    return state;
}

export const currentTableReducer = combineReducers({
    info: tableInfoReducer,
    seats: seatsReducer
    // dealer
});