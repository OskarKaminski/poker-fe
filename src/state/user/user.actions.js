import actions from '../actions';

// ACTIONS on DB
export const dbCreateUserProfile = (payload) => ({
    type: 'DB/CREATING_USER_PROFILE',
    payload
})
export const dbGetYourCurrentSeat = (tableKey, yourUid) => ({
    type: 'DB/GET_YOUR_CURRENT_SEAT',
    tableKey,
    yourUid
})

// ACTIONS on store
export const userUpdated = (payload) => ({
    type: actions.user.updated,
    payload
})