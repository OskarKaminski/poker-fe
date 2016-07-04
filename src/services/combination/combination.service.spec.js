import {combinationService} from './combination.service';

import mocks from './combination.mock.json';

describe('Combination service', () => {

    it('has method pair', ()=> {
        expect(combinationService.pair).toBeDefined();
    });

    describe('Pair method', () => {

        it(`returns 1 when input has one pair`, ()=> {
            expect(combinationService.pair(mocks.onePair)).toBe(1);
        });

        it(`returns 2 when input array has two pairs`, ()=> {
            expect(combinationService.pair(mocks.twoPairs)).toBe(2);
        });

    });

    it('has method threeOfKind', ()=> {
        expect(combinationService.threeOfKind).toBeDefined();
    });
    
    describe('ThreeOfKind method', () => {

        it(`returns 1 when input has three of kind`, ()=> {
            expect(combinationService.threeOfKind(mocks.threeOfKind)).toBe(1);
        });
        
        it(`returns 0 when input has one pair`, ()=> {
            expect(combinationService.threeOfKind(mocks.onePair)).toBe(0);
        });
        
    });

    it('has method fourOfKind', () => {
        expect(combinationService.fourOfKind).toBeDefined();
    });
    
    describe('FourOfKind method', () => {
        
        it(`returns 1 when the input has four of kind`, ()=> {
            expect(combinationService.fourOfKind(mocks.fourOfKind)).toBe(1);
        });

        it(`returns 0 when the input has only three of kind`, ()=> {
            expect(combinationService.fourOfKind(mocks.threeOfKind)).toBe(0);
        });
        
    });

    describe('Straight method', () => {

        it(`returns 1 when the input has straight`, ()=> {
            expect(combinationService.straight(mocks.straight)).toBeTruthy();
        });

        it(`returns 0 when the input has no straight`, ()=> {
            expect(combinationService.straight(mocks.fourOfKind)).toBeFalsy();
        });

    });

    it(`has method color`, ()=> {
        expect(combinationService.color).toBeDefined();
    });

    describe('Color method', () => {

        it(`returns true if there is five cards with the same color`, ()=> {
            expect(combinationService.color(mocks.color)).toBeTruthy()
        });
        
        it(`returns false if there is five cards arent the same color`, ()=> {
            expect(combinationService.color(mocks.straight)).toBeFalsy()
        });

    });
    
    it(`has method fullHouse`, ()=> {
        expect(combinationService.fullHouse).toBeDefined();
    });

    describe('FullHouse method', () => {
    
        it(`returns true if there is full house`, ()=> {
            expect(combinationService.fullHouse(mocks.fullHouse)).toBeTruthy();
        });
       
        it(`returns false if there is no full house`, ()=> {
            expect(combinationService.fullHouse(mocks.threeOfKind)).toBeFalsy();
            expect(combinationService.fullHouse(mocks.onePair)).toBeFalsy();
        });
    
    });

    it(`has method poker`, ()=> {
        expect(combinationService.poker).toBeDefined();
    });

    describe('Poker method', () => {

        it(`returns true if there is poker`, ()=> {
            expect(combinationService.poker(mocks.poker)).toBeTruthy();
        });

        it(`returns false if there is no poker`, ()=> {
            expect(combinationService.poker(mocks.color)).toBeFalsy();
            expect(combinationService.poker(mocks.straight)).toBeFalsy();
        });

    });

});