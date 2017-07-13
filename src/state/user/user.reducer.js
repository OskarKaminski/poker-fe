export const userReducer = (state = {}, action) => {
    switch(action.type){
        case 'STORE/UPDATE_USER_PROFILE':
            return action.payload
    }
    return state;
}