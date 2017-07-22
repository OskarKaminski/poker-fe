import _ from 'lodash';
import {combineReducers} from 'redux';
import {seatsReducer} from '../seats/seats.reducer';

export const tableInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CURRENT_TABLE_UPDATED':
            return _.pick(action.payload, ['id', 'name', 'numOfSeats', 'stake']);
    }
    return state;
}

export const currentTableReducer = combineReducers({
    info: tableInfoReducer,
    seats: seatsReducer
    // dealer
});