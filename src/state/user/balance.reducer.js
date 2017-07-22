export const balanceReducer = (state = 0, action) => {
    switch(action.type){
        case 'STORE/UPDATE_USER_PROFILE':
            return action.payload.balance;
    }
    return state;
}