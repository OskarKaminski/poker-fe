import _ from 'lodash';

export const combinationService = {
    checkCombination: (array) => {

        const combinations = [
            {
                name: 'poker',
                fnName: 'poker'
            },
            {
                name: 'full house',
                fnName: 'fullHouse'
            },
            {
                name: 'color',
                fnName: 'color'
            },
            {
                name: 'straight',
                fnName: 'straight'
            },
            {
                name: 'three of a kind',
                fnName: 'threeOfKind'
            },
            {
                name: 'two pairs',
                fnName: 'twoPairs'
            },
            {
                name: 'one pair',
                fnName: 'pair'
            }
        ];


        for(let i = 0; i<combinations.length; i++) {
            let combination = combinations[i];

            if (combinationService[combination.fnName](array)) {
                return combination.name;
            }
        }

        return 'high card';
    },
    pair: (array) => {

        let values = _.map(array, (el) => {
            return el.value;
        });

        let grouped = _.groupBy(values);

        return _.reduce(grouped, (sum, val) => {
            return val.length === 2 ? sum + 1 : sum
        }, 0);
    },
    onePair: (array) => {
        return combinationService.pair(array) >= 1;
    },
    twoPairs: (array) => {
        return combinationService.pair(array) >= 2;
    },
    threeOfKind: (array) => {
        let values = _.map(array, (el) => {
            return el.value;
        });

        let grouped = _.groupBy(values);

        return _.reduce(grouped, (sum, val) => {
            return val.length === 3 ? sum + 1 : sum
        }, 0);
    },
    fourOfKind: (array) => {
        let values = _.map(array, (el) => {
            return el.value;
        });

        let grouped = _.groupBy(values);

        return _.reduce(grouped, (sum, val) => {
            return val.length === 4 ? sum + 1 : sum
        }, 0);
    },
    straight: (array) => {
        let values = _.map(array, (el) => {
            return el.value;
        }).sort((a, b)=> {
            return a - b;
        });

        values = _.sortedUniq(values);
        let counter = 0;
        _.reduce(values, (previous, current) => {

            if (previous + 1 === current) {
                counter++;
            }

            if (current === 14 && values[0] === 2) {
                counter++;
            }

            return current;
        }, 0);
        return counter >= 4;
    },
    color: (array) => {
        let colors = _.map(array, (el) => {
            return el.symbol;
        });
        let grouped = _.groupBy(colors);

        return _.reduce(grouped, (sum, val) => {
            return val.length >= 5 ? sum + 1 : sum
        }, 0);
    },
    fullHouse: (array) => {
        return combinationService.pair(array) && combinationService.threeOfKind(array);
    },
    poker: (array) => {
        return combinationService.color(array) && combinationService.straight(array);
    }
};