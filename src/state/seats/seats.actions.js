// DB
export const dbFetchSeats = (tableKey) => ({
    type: 'DB/FETCHING_SEATS',
    tableKey
})

// Store
export const storeUpdateSeats = (payload) => ({
    type: 'STORE/UPDATE_SEATS',
    payload
})
export const seatReservation = (seatNumber, playerNickname) => ({
    type: 'SEAT_RESERVATION',
    seatNumber,
    playerNickname
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