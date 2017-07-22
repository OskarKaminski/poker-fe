import mockedTable from './table.mocks.json';
import {currentTableReducer, tableInfoReducer} from './table.reducer';

describe('Table reducer', () => {
    describe('CURRENT_TABLE_UPDATED', () => {
        it(`Should update info`, () => {
            const expected = {id: 'test'};
            const action = {
                type: 'CURRENT_TABLE_UPDATED',
                payload: mockedTable
            }
            const store = tableInfoReducer({}, action)
            expect(store).toEqual(expected);
        });
        it(`Should update all table`, () => {
            const expected = {
                info: {id: 'test'},
                seats: mockedTable.seats
            }
            const action = {
                type: 'CURRENT_TABLE_UPDATED',
                payload: mockedTable
            }
            const store = currentTableReducer({}, action)
            expect(store).toEqual(expected);
        });
    });
});