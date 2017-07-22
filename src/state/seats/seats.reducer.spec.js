import seatsMocks from './seats.mocks.json';
import {seatsReducer} from './seats.reducer';

describe('Table reducer', () => {
    describe('USER_LEAVES_SEAT', () => {
        it(`Should null the seat's user property`, () => {
            const expected = [
                seatsMocks.allEmpty[0],
                seatsMocks.allTaken[1]
            ];
            const action = {
                type: 'USER_LEAVES_SEAT',
                seatNo: 1
            }
            const store = seatsReducer(seatsMocks.allTaken, action)
            expect(store).toEqual(expected);
        });
    });
    describe('USER_JOINS_SEAT', () => {
        it(`Should null the seat's user property`, () => {
            const user = {
                id: 'userId',
                nickname: 'userNickname'
            };

            const expected = [{
                no: 1,
                user,
                balance: 500,
                status: 2,
                cards: null
            }, seatsMocks.allEmpty[1]];
            const action = {
                type: 'USER_JOINS_SEAT',
                seatNo: 1,
                user,
                topUp: 500,
            }
            const store = seatsReducer(seatsMocks.allEmpty, action)
            expect(store).toEqual(expected);
        });
    })
})