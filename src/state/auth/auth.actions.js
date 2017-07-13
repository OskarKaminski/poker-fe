export const login = (provider = null, config = {}) => ({
    type: 'LOGIN',
    provider,
    config
})

export const authStateChanged = (payload) => ({
    type: 'AUTH_STATE_CHANGED',
    payload
})