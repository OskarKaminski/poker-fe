import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import {tablesReducer} from './tables/tables-reducer';
import {tableReducer} from './table/table.reducer';
import {userReducer} from './user/user.reducer';

export const rootReducer = combineReducers({
    router: routerReducer,
    tables: tablesReducer,
    user: userReducer,
    table: tableReducer
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