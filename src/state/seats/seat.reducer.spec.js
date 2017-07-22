import seatMocks from './seats.mocks.json';
import {seatReducer} from './seat.reducer';

describe('Seat reducer', () => {
    const user = {
        id: 'userId',
        nickname: 'userNickname'
    };
    describe('USER_LEAVES_SEAT', () => {
        const action = {
            type: 'USER_LEAVES_SEAT',
            seatNo: 1
        }
        it(`Should null the seat's user property`, () => {
            const expected = seatMocks.empty;
            const store = seatReducer(seatMocks.taken, action);

            expect(store).toEqual(expected);
        });
    });
    describe('USER_JOINS_SEAT', () => {
        const action = {
            type: 'USER_JOINS_SEAT',
            seatNo: 1,
            user,
            topUp: 500,
        }
        it(`Should set user, balance and status`, () => {
            const expected = {
                ...seatMocks.empty,
                user,
                balance: 500,
                status: 2
            };
            const store = seatReducer(seatMocks.empty, action)
            expect(store).toEqual(expected);
        });
    })
})