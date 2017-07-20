import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import {tablesReducer} from './tables/tables-reducer';
import {tableReducer} from './tables/table.reducer';
import {playerReducer} from './player/player.reducer';
import {seatsReducer} from './seats/seats.reducer';

export const rootReducer = combineReducers({
    router: routerReducer,
    tables: tablesReducer,
    player: playerReducer,
    seats: seatsReducer,
    currentTable: tableReducer
});

const exampleOfPlayer = {
    currentTable: {
        status: ['watching', 'reservation', 'playing'],
        seat: 2,
        yourMove: false,
        cards: [
            {value: 10, color: 'heart'},
            {value: 3, color: 'heart'}
        ],
        combination: {
            name: 'color',
            highest: 'K'
        }
    },
    tablesJoined: [
        {table: 'key', seat: 'key'},
        {table: 'key2', seat: 'key2'}
    ],
    balance: 5000,
}