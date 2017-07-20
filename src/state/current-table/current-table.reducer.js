import {combineReducers} from 'redux';
import {yourMoveReducer} from './your-move.reducer';
import {seatReducer} from './seat.reducer';
import {statusReducer} from './status.reducer';
import {cardsReducer} from './cards.reducer';
import {combinationReducer} from './combination.reducer';

export const currentTableReducer = combineReducers({
    status: statusReducer,
    seat: seatReducer,
    yourMove: yourMoveReducer,
    cards: cardsReducer,
    combination: combinationReducer
});