import actions from '../actions';
import seatMocks from './seats.mocks.json';
import {seatReducer} from './seat.reducer';

describe('Seat reducer', () => {
    describe('Happy flow', () => {
        const user = {
            id: 'userId',
            nickname: 'userNickname'
        };
        describe(actions.seat.playerLeft, () => {
            let action = {
                type: actions.seat.playerLeft,
                seatNo: 1
            }
            describe('For the same seat number', () => {
                it(`Should null the seat's user property`, () => {
                    const input = seatMocks.taken;
                    const expected = seatMocks.empty;
                    expect(seatReducer(input, action)).toEqual(expected);
                });
            });
            describe('For different seat number', () => {
                it(`Shouldn't change`, () => {
                    action.seatNo = 999;
                    const input = seatMocks.taken;
                    const expected = input;
                    expect(seatReducer(input, action)).toEqual(expected);
                });
            });
        });
        describe(actions.seat.playerJoined, () => {
            let action = {
                type: actions.seat.playerJoined,
                seatNo: 1,
                user,
                topUp: 500,
            }
            describe('For the same seat number', () => {
                it(`Should set user, balance and status`, () => {
                    const input = seatMocks.empty;
                    const expected = {
                        ...input,
                        user,
                        balance: 500,
                        status: 2
                    };
                    expect(seatReducer(input, action)).toEqual(expected);
                });
            });
            describe('For different seat number', () => {
                it(`Shouldn't change`, () => {
                    action.seatNo = 999;
                    const input = seatMocks.empty;
                    const expected = input;
                    expect(seatReducer(input, action)).toEqual(expected);
                });
            });
        })
        describe(actions.seat.reserved, () => {
            const user = {id: 'correctId', nickname: 'nickname'}
            let action = {
                type: actions.seat.reserved,
                seatNo: 1,
                user
            }
            describe('For the same seat number', () => {
                it(`Should set proper status`, () => {
                    const input = seatMocks.empty;
                    const expected = {...input, status: 1, user};
                    expect(seatReducer(input, action)).toEqual(expected);
                });
            });
            describe('For different seat number', () => {
                it(`Shouldn't change`, () => {
                    action.seatNo = 999;
                    const input = seatMocks.empty;
                    const expected = input;
                    expect(seatReducer(input, action)).toEqual(expected);
                });
            });
        });
    });
    describe('Edge cases', () => {
        describe(actions.seat.reserved, () => {
            const user = {id: 'correctId', nickname: 'nickname'}
            let action = {
                type: actions.seat.reserved,
                seatNo: 1,
                user
            }
            describe('When Player currently sits', () => {
                it(`Shouldn't change`, () => {
                    const input = seatMocks.taken;
                    const expected = input;
                    expect(seatReducer(input, action)).toEqual(expected);
                });
            });
            describe('When current status is undefined', () => {
                it(`Should set proper status`, () => {
                    const input = {...seatMocks.empty, status: undefined};
                    const expected = {...input, status: 1, user};
                    expect(seatReducer(input, action)).toEqual(expected);
                });
            });
        });
    });

})