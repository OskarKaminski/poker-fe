import _ from 'lodash';

const changeReservation = (seats, seatNumber, reserved) => {
    return _.map(seats, el => {
        return el.no === seatNumber ? {...el, reserved} : el;
    })
}

export const seatsReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE/UPDATE_SEATS':
            return action.payload;
        case 'SEAT_RESERVATION':
            return changeReservation(state, action.seatNumber, true);
        case 'SEAT_RESERVATION_CANCEL':
            return changeReservation(state, action.seatNumber, false);
    }
    return state;
}