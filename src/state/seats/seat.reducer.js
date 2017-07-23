import actions from '../actions';

export const seatReducer = (state = {}, action) => {
    if (state.no === action.seatNo) {
        switch (action.type) {
            case actions.seat.playerLeft:
                return {
                    ...state,
                    user: null,
                    balance: null,
                    status: 0,
                    cards: null
                }
            case actions.seat.playerJoined:
                return {
                    ...state,
                    user: action.user,
                    balance: action.topUp,
                    status: 2,
                    cards: null
                }
            case actions.seat.reserved:
                if (state.status !== 2) {
                    return {...state, status: 1, user: action.user}
                }
                break;
        }
    }
    return state;
}