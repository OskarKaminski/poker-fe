import {resultService} from './result.service';

describe('Result Service', () => {
    
    it(`has method checkResult`, ()=> {
        expect(resultService.checkResult).toBeDefined();
    });
    
    describe('Method checkResult', () => {
        
        it(`calles method bestCombination`, ()=> {
            spyOn(resultService, 'bestCombination');
            resultService.checkResult();
            expect(resultService.bestCombination).toHaveBeenCalled();
        });
        
    });
    
    describe('Method bestCombination', () => {

        describe(`Returns combination indexes sorted
        from the strongest to the weakest`, ()=> {

            it(`for different combinations`, ()=> {
                const combinations = [
                    {
                        combinationId: 1,
                        value: [12, 12],
                        kicker: 5
                    }, {
                        combinationId: 2,
                        value: [12, 12],
                        kicker: 5
                    }, {
                        combinationId: 3,
                        value: [12, 12],
                        kicker: 5
                    }
                ];

                expect(resultService.bestCombination(combinations))
                    .toEqual([2, 1, 0]);
            });
        });

        describe(`Nested array if two combinations are equal`, ()=> {

            it(`for the same combinations`, ()=> {
                const combinations = [
                    {
                        combinationId: 1,
                        value: [12, 12],
                        kicker: 5
                    }, {
                        combinationId: 1,
                        value: [12, 12],
                        kicker: 5
                    }, {
                        combinationId: 3,
                        value: [12, 12],
                        kicker: 5
                    }
                ];

                expect(resultService.bestCombination(combinations))
                    .toEqual([2, [1, 0]]);
            });
        });
    });

    describe(`Best kicker method returns`, () => {
        
        describe(`Array of kicker indexes sorted 
        from the strongest to the weakest`, () => {
            
            it(`for different kickers`, ()=> {
                const differentKickers = [
                    [8, 5, 3],
                    [4, 3, 2],
                    [6, 5, 2]
                ];
                expect(resultService.bestKicker(differentKickers))
                    .toEqual([0, 2, 1]);
            });
    
            it(`for the same first kicker`, ()=> {
                const kickersFirstTheSame = [
                    [14, 6, 2],
                    [11, 7, 3],
                    [14, 6, 3],
                    [13, 3, 2]
                ];
                expect(resultService.bestKicker(kickersFirstTheSame))
                    .toEqual([2, 0, 3, 1]);
            });
            
        });

        describe('Nested array if two kickers suites are equal', () => {
            
            it(`for the equal kickers`, ()=> {
                const equalKickers = [
                    [8, 6],
                    [8, 6]
                ];
        
                expect(resultService.bestKicker(equalKickers)).toEqual([[0, 1]]);
            });
            
        });
        
    });

    describe(`Best value method returns`, () => {

        describe(`Array of value indexes sorted 
        from the strongest to the weakest`, () => {

            it(`for different values`, ()=> {
                const differentValues = [
                    [8, 5],
                    [4, 2],
                    [6, 14]
                ];
                expect(resultService.bestValue(differentValues))
                    .toEqual([2, 0, 1]);
            });

        });

    });

});