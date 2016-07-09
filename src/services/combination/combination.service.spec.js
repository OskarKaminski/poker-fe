import {combinationService} from './combination.service';

import mocks from './combination.mock.json';

describe('Combination service', () => {
    
    

    it('has method onePair', ()=> {
        expect(combinationService.onePair).toBeDefined();
    });

    describe('OnePair method', () => {
        

        let testCases = [
            {
                input: [
                    {
                        "value": 2,
                        "symbol": "spades"
                    },
                    {
                        "value": 5,
                        "symbol": "hearts"
                    },
                    {
                        "value": 2,
                        "symbol": "clubs"
                    },
                    {
                        "value": 11,
                        "symbol": "spades"
                    },
                    {
                        "value": 12,
                        "symbol": "spades"
                    }
                ],
                expected: {
                    value: [2],
                    kicker: [12, 11, 5]
                }
            }, 
            {
                input: [
                    {
                        "value": 12,
                        "symbol": "spades"
                    },
                    {
                        "value": 5,
                        "symbol": "hearts"
                    },
                    {
                        "value": 2,
                        "symbol": "clubs"
                    },
                    {
                        "value": 11,
                        "symbol": "spades"
                    },
                    {
                        "value": 12,
                        "symbol": "spades"
                    }
                ],
                expected: {
                    value: [12],
                    kicker: [11, 5, 2]
                }
            },
            {
                input: [
                    {
                        "value": 12,
                        "symbol": "spades"
                    },
                    {
                        "value": 5,
                        "symbol": "hearts"
                    },
                    {
                        "value": 2,
                        "symbol": "clubs"
                    },
                    {
                        "value": 11,
                        "symbol": "spades"
                    },
                    {
                        "value": 3,
                        "symbol": "spades"
                    },
                    {
                        "value": 9,
                        "symbol": "spades"
                    },
                    {
                        "value": 12,
                        "symbol": "spades"
                    }
                ],
                expected: {
                    value: [12],
                    kicker: [11, 9, 5]
                }
            }
        ];
        
        _.map(testCases, (test, key) => {
            it(`returns correct value for case no. ${key+1}`, ()=> {
                expect(combinationService.onePair(test.input).value)
                    .toEqual(test.expected.value);
            });

            it(`returns correct kicker for case no. ${key+1}`, ()=> {
                expect(combinationService.onePair(test.input).kicker)
                    .toEqual(test.expected.kicker);
            });
        });

    });

    it('has method twoPairs', ()=> {
        expect(combinationService.twoPairs).toBeDefined();
    });

    describe('TwoPairs method', () => {
        let testCases = [
            {
                input: [
                    {
                        "value": 2,
                        "symbol": "spades"
                    },
                    {
                        "value": 5,
                        "symbol": "hearts"
                    },
                    {
                        "value": 2,
                        "symbol": "clubs"
                    },
                    {
                        "value": 5,
                        "symbol": "spades"
                    },
                    {
                        "value": 12,
                        "symbol": "spades"
                    }
                ],
                expected: {
                    value: [5, 2],
                    kicker: [12]
                }
            },
            {
                input: [
                    {
                        "value": 12,
                        "symbol": "spades"
                    },
                    {
                        "value": 11,
                        "symbol": "hearts"
                    },
                    {
                        "value": 2,
                        "symbol": "clubs"
                    },
                    {
                        "value": 11,
                        "symbol": "spades"
                    },
                    {
                        "value": 12,
                        "symbol": "spades"
                    }
                ],
                expected: {
                    value: [12, 11],
                    kicker: [2]
                }
            },
            {
                input: [
                    {
                        "value": 12,
                        "symbol": "spades"
                    },
                    {
                        "value": 5,
                        "symbol": "hearts"
                    },
                    {
                        "value": 9,
                        "symbol": "clubs"
                    },
                    {
                        "value": 11,
                        "symbol": "spades"
                    },
                    {
                        "value": 3,
                        "symbol": "spades"
                    },
                    {
                        "value": 9,
                        "symbol": "spades"
                    },
                    {
                        "value": 12,
                        "symbol": "spades"
                    }
                ],
                expected: {
                    value: [12, 9],
                    kicker: [11]
                }
            }
        ];

        _.map(testCases, (test, key) => {
            it(`returns correct value for case no. ${key+1}`, ()=> {
                expect(combinationService.twoPairs(test.input).value)
                    .toEqual(test.expected.value);
            });

            it(`returns correct kicker for case no. ${key+1}`, ()=> {
                expect(combinationService.twoPairs(test.input).kicker)
                    .toEqual(test.expected.kicker);
            });
        });
    
    });

    it('has method threeOfKind', ()=> {
        expect(combinationService.threeOfKind).toBeDefined();
    });

    describe('ThreeOfKind method', () => {

        let testCases = [
            {
                input: [
                    {
                        "value": 2,
                        "symbol": "spades"
                    },
                    {
                        "value": 2,
                        "symbol": "hearts"
                    },
                    {
                        "value": 2,
                        "symbol": "clubs"
                    },
                    {
                        "value": 5,
                        "symbol": "spades"
                    },
                    {
                        "value": 12,
                        "symbol": "spades"
                    }
                ],
                expected: {
                    value: [2],
                    kicker: [12, 5]
                }
            },
            {
                input: [
                    {
                        "value": 12,
                        "symbol": "spades"
                    },
                    {
                        "value": 12,
                        "symbol": "hearts"
                    },
                    {
                        "value": 2,
                        "symbol": "clubs"
                    },
                    {
                        "value": 11,
                        "symbol": "spades"
                    },
                    {
                        "value": 12,
                        "symbol": "spades"
                    }
                ],
                expected: {
                    value: [12],
                    kicker: [11, 2]
                }
            },
            {
                input: [
                    {
                        "value": 12,
                        "symbol": "spades"
                    },
                    {
                        "value": 5,
                        "symbol": "hearts"
                    },
                    {
                        "value": 3,
                        "symbol": "clubs"
                    },
                    {
                        "value": 11,
                        "symbol": "spades"
                    },
                    {
                        "value": 3,
                        "symbol": "spades"
                    },
                    {
                        "value": 9,
                        "symbol": "spades"
                    },
                    {
                        "value": 3,
                        "symbol": "spades"
                    }
                ],
                expected: {
                    value: [3],
                    kicker: [12, 11]
                }
            }
        ];

        _.map(testCases, (test, key) => {
            it(`returns correct value for case no. ${key+1}`, ()=> {
                expect(combinationService.threeOfKind(test.input).value)
                    .toEqual(test.expected.value);
            });

            it(`returns correct kicker for case no. ${key+1}`, ()=> {
                expect(combinationService.threeOfKind(test.input).kicker)
                    .toEqual(test.expected.kicker);
            });
        });

    });

    it('has method fourOfKind', () => {
        expect(combinationService.fourOfKind).toBeDefined();
    });

    describe('FourOfKind method', () => {

        let testCases = [
            {
                input: [
                    {
                        "value": 2,
                        "symbol": "spades"
                    },
                    {
                        "value": 2,
                        "symbol": "hearts"
                    },
                    {
                        "value": 2,
                        "symbol": "clubs"
                    },
                    {
                        "value": 2,
                        "symbol": "spades"
                    },
                    {
                        "value": 12,
                        "symbol": "spades"
                    }
                ],
                expected: {
                    value: [2],
                    kicker: [12]
                }
            },
            {
                input: [
                    {
                        "value": 12,
                        "symbol": "spades"
                    },
                    {
                        "value": 12,
                        "symbol": "hearts"
                    },
                    {
                        "value": 2,
                        "symbol": "clubs"
                    },
                    {
                        "value": 12,
                        "symbol": "spades"
                    },
                    {
                        "value": 12,
                        "symbol": "spades"
                    }
                ],
                expected: {
                    value: [12],
                    kicker: [2]
                }
            },
            {
                input: [
                    {
                        "value": 3,
                        "symbol": "spades"
                    },
                    {
                        "value": 5,
                        "symbol": "hearts"
                    },
                    {
                        "value": 3,
                        "symbol": "clubs"
                    },
                    {
                        "value": 11,
                        "symbol": "spades"
                    },
                    {
                        "value": 3,
                        "symbol": "spades"
                    },
                    {
                        "value": 9,
                        "symbol": "spades"
                    },
                    {
                        "value": 3,
                        "symbol": "spades"
                    }
                ],
                expected: {
                    value: [3],
                    kicker: [11]
                }
            }
        ];

        _.map(testCases, (test, key) => {
            it(`returns correct value for case no. ${key+1}`, ()=> {
                expect(combinationService.fourOfKind(test.input).value)
                    .toEqual(test.expected.value);
            });

            it(`returns correct kicker for case no. ${key+1}`, ()=> {
                expect(combinationService.fourOfKind(test.input).kicker)
                    .toEqual(test.expected.kicker);
            });
        });

    });

    describe('Straight method', () => {

        it(`returns 1 when the input has straight`, ()=> {
            expect(combinationService.straight(mocks.straight)).toBeTruthy();
        });

    });

    it(`has method color`, ()=> {
        expect(combinationService.color).toBeDefined();
    });

    describe('Color method', () => {

        it(`returns true if there is five cards with the same color`, ()=> {
            expect(combinationService.color(mocks.color)).toBeTruthy();
        });

        it(`returns false if there is five cards arent the same color`, ()=> {
            expect(combinationService.color(mocks.straight)).toBeFalsy();
        });

    });

    it(`has method fullHouse`, ()=> {
        expect(combinationService.fullHouse).toBeDefined();
    });

    describe('FullHouse method', () => {

        xit(`returns true if there is full house`, ()=> {
            expect(combinationService.fullHouse(mocks.fullHouse)).toBeTruthy();
        });

        xit(`returns false if there is no full house`, ()=> {
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

    it(`has method highCard`, ()=> {
        expect(combinationService.highCard).toBeDefined();
    });

    describe('HighCard method', () => {

        it(`returns high card object with proper kicker`, ()=> {
            const expected = {
                combinationId: 0,
                value: 0,
                kicker: 13
            };
            expect(combinationService.highCard(mocks.highCard)).toEqual(expected);
        });

        it(`returns false if there is no poker`, ()=> {
            const expected = {
                combinationId: 0,
                value: 0,
                kicker: 14
            };
            expect(combinationService.highCard(mocks.smallStraight)).toEqual(expected);
        });

    });

    it(`has method checkCombination`, ()=> {
        expect(combinationService.checkCombination).toBeDefined();
    });

    describe('CheckCombination method', () => {

        xit(`returns 'color' for color combination`, ()=> {
            expect(combinationService.checkCombination(mocks.color))
                .toBe('color');
        });

        xit(`returns 'straight' for straight combination`, ()=> {
            expect(combinationService.checkCombination(mocks.straight))
                .toBe('straight');
        });

        xit(`returns 'poker' for poker combination`, ()=> {
            expect(combinationService.checkCombination(mocks.poker))
                .toBe('poker');
        });

        xit(`returns 'full house' for full house combination`, ()=> {
            expect(combinationService.checkCombination(mocks.fullHouse))
                .toBe('full house');
        });

        xit(`returns 'three of a kind' for three of a kind combination`, ()=> {
            expect(combinationService.checkCombination(mocks.threeOfKind))
                .toBe('three of a kind');
        });

        xit(`returns 'four of a kind' for four of a kind combination`, ()=> {
            expect(combinationService.checkCombination(mocks.fourOfKind))
                .toBe('four of a kind');
        });

        xit(`returns 'two pairs' for two pairs combination`, ()=> {
            expect(combinationService.checkCombination(mocks.twoPairs))
                .toBe('two pairs');
        });

        xit(`returns 'one pair' for one pair combination`, ()=> {

            const onePairLowKicker = [
                {
                    "value": 12,
                    "symbol": "spades"
                },
                {
                    "value": 5,
                    "symbol": "hearts"
                },
                {
                    "value": 2,
                    "symbol": "clubs"
                },
                {
                    "value": 4,
                    "symbol": "spades"
                },
                {
                    "value": 12,
                    "symbol": "spades"
                }
            ];

            let expected = {
                strength: 1,
                value: [12, 12],
                kicker: 5
            };

            expect(combinationService.checkCombination(onePairLowKicker))
                .toEqual(expected);
        });

    });

});