export const seatReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LEAVES_SEAT':
            if(state.no === action.seatNo){
                return {
                    ...state,
                    user: null,
                    balance: null,
                    status: 0,
                    cards: null
                }
            }
            break;
        case 'USER_JOINS_SEAT':
            if(state.no === action.seatNo){
                return {
                    ...state,
                    user: action.user,
                    balance: action.topUp,
                    status: 2,
                    cards: null
                }
            }
            break;
    }
    return state;
}