import actions from '../actions';
import tableMock from '../table/table.mocks.json';
import {userIdReducer, profileReducer, userSeatReducer} from './user.reducer';

describe('User Id reducer', () => {
    describe('Happy flow', () => {
        describe(actions.auth.updated, () => {
            let action = {
                type: actions.auth.updated,
                payload: {uid: 'test'}
            }
            it(`Should update user id`, ()=> {
                expect(userIdReducer({}, action)).toEqual('test')
            });
        });
    });
});

describe('Profile reducer', () => {
    describe('Happy flow', () => {
        describe(actions.user.updated, () => {
            const profile = {displayName: 'test'}
            let action = {
                type: actions.user.updated,
                payload: profile
            }
            it(`Should update user profile`, ()=> {
                expect(profileReducer({}, action)).toEqual(profile)
            });
        });
    });
});

describe('User Seat reducer', () => {
    describe('Happy flow', () => {
        describe(actions.user.checkSeatNumber, () => {
            const defaultAction = {
                type: actions.user.checkSeatNumber,
                table: tableMock
            }
            describe('When a user is sitting on a seat', () => {
                const action = {...defaultAction, userId: 'userId1'};
                it(`Should update his seat number`, ()=> {
                    expect(userSeatReducer({}, action)).toEqual(1);
                });
            });
            describe('When a user is not sitting on a seat', () => {
                const action = {...defaultAction, userId: 'notExisting'};
                it(`Shouldn't do anything`, ()=> {
                    expect(userSeatReducer({}, action)).toEqual(null)
                });
            });
        });
    });
});