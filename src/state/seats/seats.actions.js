import actions from '../actions';

export const seatReserved = (seatKey) => ({
    type: actions.seat.reserved,
    seatKey
})