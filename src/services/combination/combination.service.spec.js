import {combinationService} from './combination.service';

import mocks from './combination.mock.json';

describe('Combination service', () => {

    it('has method pair', ()=> {
        expect(combinationService.pair).toBeDefined();
    });

    describe('Pair method', () => {

        let inputs = mocks.onePair;

        _.map(inputs, (input, key) => {
            it(`returns 1 when input has ${key}`, ()=> {
                expect(combinationService.pair(input)).toBe(1);
            });
        });


        inputs = mocks.twoPairs;

        _.map(inputs, (input, key) => {
            it(`returns 2 when input array has ${key}`, ()=> {
                expect(combinationService.pair(input)).toBe(2);
            });
        });

    });

    it('has method threeOfKind', ()=> {
        expect(combinationService.threeOfKind).toBeDefined();
    });
    
    describe('ThreeOfKind method', () => {

        let inputs = mocks.threeOfKind;
        
        _.map(inputs, (input, key) => {
            it(`returns 1 when input has ${key}`, ()=> {
                expect(combinationService.threeOfKind(input)).toBe(1);
            });
        });
        
        inputs = mocks.threeOfKindLessOrMoreThanOne;
        
        _.map(inputs, (input, key) => {
            it(`returns different than 1 when input has ${key}`, ()=> {
                expect(combinationService.threeOfKind(input)).not.toBe(1);
            });
        });
        
    });

});