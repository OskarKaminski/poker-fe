// ACTIONS on db
export const dbGetYourCurrentSeat = (tableKey, yourUid) => ({
    type: 'DB/GET_YOUR_CURRENT_SEAT',
    tableKey,
    yourUid
})

// ACTIONS on store
export const storeUpdateYourCurrentTable = (seatKey) => ({
    type: 'STORE/UPDATE_YOUR_CURRENT_TABLE',
    seatKey
})