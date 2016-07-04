import {combinationService} from './combination.service';

import mocks from './combination.mock.json';

describe('Combination service', () => {

    it('has method onePair', ()=> {
        expect(combinationService.onePair).toBeDefined();
    });

    describe('OnePair method', () => {

        it(`returns 1 when input has one pair`, ()=> {
            expect(combinationService.onePair(mocks.onePair)).toBeTruthy();
        });

    });
    
    it('has method twoPairs', ()=> {
        expect(combinationService.twoPairs).toBeDefined();
    });

    describe('TwoPairs method', () => {

        it(`returns 2 when input array has two pairs`, ()=> {
            expect(combinationService.twoPairs(mocks.twoPairs)).toBeTruthy();
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

        it(`returns 1 when the input has small straight`, ()=> {
            expect(combinationService.straight(mocks.smallStraight)).toBeTruthy(); 
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
    
    it(`has method checkCombination`, ()=> {
        expect(combinationService.checkCombination).toBeDefined();
    });

    describe('CheckCombination method', () => {

        it(`returns 'color' for color combination`, ()=> {
            expect(combinationService.checkCombination(mocks.color))
                .toBe('color');
        });
        
        it(`returns 'straight' for straight combination`, ()=> {
            expect(combinationService.checkCombination(mocks.straight))
                .toBe('straight');
        });
        
        it(`returns 'poker' for poker combination`, ()=> {
            expect(combinationService.checkCombination(mocks.poker))
                .toBe('poker');
        });
        
        it(`returns 'full house' for full house combination`, ()=> {
            expect(combinationService.checkCombination(mocks.fullHouse))
                .toBe('full house');
        });
        
        it(`returns 'three of a kind' for three of a kind combination`, ()=> {
            expect(combinationService.checkCombination(mocks.threeOfKind))
                .toBe('three of a kind');
        });
        
        it(`returns 'two pairs' for two pairs combination`, ()=> {
            expect(combinationService.checkCombination(mocks.twoPairs))
                .toBe('two pairs');
        });
        
        it(`returns 'one pair' for one pair combination`, ()=> {
            expect(combinationService.checkCombination(mocks.onePair))
                .toBe('one pair');
        });

    });

});