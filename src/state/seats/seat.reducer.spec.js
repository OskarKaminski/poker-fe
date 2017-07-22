import seatMocks from './seats.mocks.json';
import {seatReducer} from './seat.reducer';

describe('Seat reducer', () => {
    const user = {
        id: 'userId',
        nickname: 'userNickname'
    };
    describe('USER_LEAVES_SEAT', () => {
        let action = {
            type: 'USER_LEAVES_SEAT'
        }
        it(`Should null the seat's user property`, () => {
            action.seatNo = 1;
            const expected = seatMocks.empty;
            const store = seatReducer(seatMocks.taken, action);

            expect(store).toEqual(expected);
        });
        it(`Shouldn't change if different seat number`, () => {
            action.seatNo = 999;
            const input = seatMocks.taken;
            const expected = input;
            const store = seatReducer(input, action);

            expect(store).toEqual(expected);
        });
    });
    describe('USER_JOINS_SEAT', () => {
        let action = {
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
        it(`Shouldn't change if different seat number`, () => {
            action.seatNo = 999;
            const input = seatMocks.empty;
            const expected = input;
            const store = seatReducer(input, action);

            expect(store).toEqual(expected);
        });
    })
})