export const seatReducer = (state = null, action) => {
    switch(action.type){
        case 'STORE/SET_SEAT':
            return action.seat;
    }
    return state;
}