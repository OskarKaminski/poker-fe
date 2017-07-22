import {combineReducers} from 'redux';
import actions from '../actions';
import {seatsReducer} from '../seats/seats.reducer';
import _ from 'lodash';


export const tableInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.table.updated:
            return _.pick(action.payload, ['id', 'name', 'numOfSeats', 'stake']);
    }
    return state;
}

export const tableReducer = combineReducers({
    info: tableInfoReducer,
    seats: seatsReducer
    // dealer
});