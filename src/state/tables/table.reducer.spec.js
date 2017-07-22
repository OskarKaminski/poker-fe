import {currentTableReducer, seatsReducer, tableInfoReducer} from './table.reducer';
const mockedSeats = [
    {
        no: 1,
        user: {
            id: 'userId1',
            nickname: 'User1'
        },
        balance: 1000,
        status: 2,
        cards: [{}, {}]
    },{
        no: 2,
        user: {
            id: 'userId2',
            nickname: 'User2'
        },
        balance: 1000,
        status: 2,
        cards: [{}, {}]
    }
]
const mockedTable = {
    id: 'test',
    seats: mockedSeats
}

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
        it(`Should update seats`, () => {
            const expected = mockedSeats;
            const action = {
                type: 'CURRENT_TABLE_UPDATED',
                payload: mockedTable
            }
            const store = seatsReducer({}, action)
            expect(store).toEqual(expected);
        });
        it(`Should update all table`, () => {
            const expected = {
                info: {id: 'test'},
                seats: mockedSeats
            }
            const action = {
                type: 'CURRENT_TABLE_UPDATED',
                payload: mockedTable
            }
            const store = currentTableReducer({}, action)
            expect(store).toEqual(expected);
        });
    });
    describe('USER_LEAVES_SEAT', () => {
        it(`Should null the seat's user property`, () => {
            const expected = [{
                no: 1,
                user: null,
                balance: null,
                status: 0,
                cards: null
            }, mockedSeats[1]];
            const action = {
                type: 'USER_LEAVES_SEAT',
                seatNo: 1
            }
            const store = seatsReducer(mockedSeats, action)
            expect(store).toEqual(expected);
        });
    });
    describe('USER_JOINS_SEAT', () => {
        it(`Should null the seat's user property`, () => {
            const user = {
                id: 'userId',
                nickname: 'userNickname'
            };
            const mockedSeatsWithoutUser = [
                {
                    ...mockedSeats[0],
                    user: null
                }, mockedSeats[1]
            ]
            const expected = [{
                no: 1,
                user,
                balance: 500,
                status: 2,
                cards: null
            }, mockedSeats[1]];
            const action = {
                type: 'USER_JOINS_SEAT',
                seatNo: 1,
                user,
                topUp: 500,
            }
            const store = seatsReducer(mockedSeatsWithoutUser, action)
            expect(store).toEqual(expected);
        });
    })
});