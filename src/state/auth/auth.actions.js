import actions from '../actions';

export const login = (provider = null, config = {}) => ({
    type: 'LOGIN',
    provider,
    config
})

export const authStateChanged = (payload) => ({
    type: actions.auth.updated,
    payload
})