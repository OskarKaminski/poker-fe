import actions from '../actions';

// ACTIONS on DB
export const dbCreateUserProfile = (payload) => ({
    type: 'DB/CREATING_USER_PROFILE',
    payload
})

// ACTIONS on store
export const userUpdated = (payload) => ({
    type: actions.user.updated,
    payload
})