import mockedTable from './table.mocks.json';
import actions from '../actions';
import {tableReducer, tableInfoReducer} from './table.reducer';

describe('Table reducer', () => {
    describe(actions.table.updated, () => {
        it(`Should update info`, () => {
            const expected = {id: 'test'};
            const action = {
                type: actions.table.updated,
                payload: mockedTable
            }
            const store = tableInfoReducer({}, action)
            expect(store).toEqual(expected);
        });
        it(`Should update all table`, () => {
            const tableKey = 'key';
            const expected = {
                info: {id: 'test'},
                seats: mockedTable.seats,
                key: tableKey
            }
            const action = {
                type: actions.table.updated,
                payload: mockedTable,
                key: tableKey
            }
            const store = tableReducer({}, action)
            expect(store).toEqual(expected);
        });
    });
});