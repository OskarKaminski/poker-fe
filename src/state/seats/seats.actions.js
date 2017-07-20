// DB
export const dbFetchSeats = (tableKey) => ({
    type: 'DB/FETCHING_SEATS',
    tableKey
})
export const dbSeatReservation = (tableKey, seatNumber, user) => ({
    type: 'DB/SEAT_RESERVATION',
    tableKey,
    seatNumber,
    user
})
export const dbSeatSit = (tableKey, seatNumber, user, amount) => ({
    type: 'DB/SEAT_SIT',
    tableKey,
    seatNumber,
    user,
    amount
})
export const dbSeatEnroll = (amount) => ({
    type: 'DB/SEAT_ENROLL',
    amount
})

// Store
export const storeUpdateSeats = (payload) => ({
    type: 'STORE/UPDATE_SEATS',
    payload
})
export const seatEnroll = (amount) => ({
    type: 'SEAT_ENROLL',
    amount
})
export const seatLeave = (seatNumber, seatBalance) => ({
    type: 'SEAT_LEAVE',
    seatNumber,
    seatBalance
})