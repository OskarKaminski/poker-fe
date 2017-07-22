import {combineReducers} from 'redux';
import _ from 'lodash';

export const tableInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CURRENT_TABLE_UPDATED':
            return _.pick(action.payload, ['id', 'name', 'numOfSeats', 'stake']);
    }
    return state;
}

export const seatsReducer = (state = [], action) => {
    switch (action.type) {
        case 'CURRENT_TABLE_UPDATED':
            return action.payload.seats;
        case 'USER_LEAVES_SEAT':
            return _.map(state, el => {
                return el.no === action.seatNo ?
                    {
                        ...el,
                        user: null,
                        balance: null,
                        status: 0,
                        cards: null
                    } : el;
            });
        case 'USER_JOINS_SEAT':
            return _.map(state, el => {
                return el.no === action.seatNo ?
                    {
                        ...el,
                        user: action.user,
                        balance: action.topUp,
                        status: 2,
                        cards: null
                    } : el;
            });
    }
    return state;
}

// const seatInfoReducer = (state = null, action) => {
//     switch(action.type){
//         case 'CURRENT_TABLE_UPDATED'
//     }
//     return state;
// }

// const seats = (state = null, action) => {
//     switch(action.type){
//         case 'CURRENT_TABLE_UPDATED':
//             return [
//                 ...seatReducer
//             ]
//     }
//     return state;
// }

// const seatReducer = combineReducers({
//     no: seatInfoReducer,
//     user,
//     balance,
//     status: statusReducer,
//     cards: cardsReducer
// });

// TODO - ogarnac ten skombinowany reducer
export const currentTableReducer = combineReducers({
    info: tableInfoReducer,
    seats: seatsReducer
    // dealer
});