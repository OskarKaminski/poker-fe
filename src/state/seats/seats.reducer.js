import _ from 'lodash';
import actions from '../actions';
import {seatReducer} from './seat.reducer'

// const changeReservation = (seats, seatNumber, reserved) => {
//     return _.map(seats, el => {
//         return el.no === seatNumber ? {...el, reserved} : el;
//     })
// }

export const seatsReducer = (state = [], action) => {
    switch (action.type) {
        case actions.table.updated:
            return action.payload.seats;
        case 'USER_LEAVES_SEAT':
            return _.map(state, seat => seatReducer(seat, action));
        case 'USER_JOINS_SEAT':
            return _.map(state, seat => seatReducer(seat, action));
        // case actions.seat.reserved:
        //     return _.map(state, seat => seatReducer(seat, action));
    }
    return state;
}