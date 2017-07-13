export const authReducer = (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            console.log('Login!!');
            return state
        case 'LOGIN_SUCCESS':
            return state
        case 'AUTH_STATE_CHANGED':
            return action.payload
    }
    return state;
}