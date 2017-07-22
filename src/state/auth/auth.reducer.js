import actions from '../actions';

export const authReducer = (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            console.log('Login!!');
            return state
        case 'LOGIN_SUCCESS':
            return state
        case actions.auth.updated:
            return action.payload
    }
    return state;
}