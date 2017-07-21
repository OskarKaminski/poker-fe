// ACTIONS on DB
export const dbCheckIfUserExists = (id) => ({
    type: 'DB/CHECKING_IF_USER_EXIST',
    id
});
export const dbCreateUserProfile = (payload) => ({
    type: 'DB/CREATING_USER_PROFILE',
    payload
})

// ACTIONS on store
export const storeUpdateUserProfile = (payload) => ({
    type: 'USER_PROFILE_UPDATED',
    payload
})
// export const updateBalance = (balance) => ({
//     type: 'UPDATING_USER_BALANCE',
//     balance
// })