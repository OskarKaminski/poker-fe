import _ from 'lodash';
import fp from 'lodash/fp';

export const combinationService = {
    checkCombination: (array) => {

        const combinations = [
            {
                strength: 0,
                name: 'highCard'
            },
            {
                strength: 1,
                name: 'onePair'
            },
            {
                strength: 2,
                name: 'twoPairs'
            },
            {
                strength: 3,
                name: 'threeOfKind'
            },
            {
                strength: 4,
                name: 'straight'
            },
            {
                strength: 5,
                name: 'color'
            },
            {
                strength: 6,
                name: 'fullHouse'
            },
            {
                strength: 7,
                name: 'fourOfKind'
            },
            {
                strength: 8,
                name: 'poker'
            }
        ];

        for(let i = 0; i<combinations.length; i++) {
            let combination = combinations[i];

            let result;
            let values = combinationService.getSortValues(array);
            console.log(values);

            if (result = combinationService[combination.name](values)) {

                // let kicker = combinationService.getKicker(values, result);
                console.log(result);

                return {
                    value: result,
                    strength: combination.strength,
                    // kicker: kicker
                };
            }
        }
    },
    getSortValues: (array) => {
        return _.map(array, (el) => {
            return el.value;
        }).sort((a, b)=> {
            return b - a;
        });
    },
    getCombination: (array, condition, kickers) => {
        let values = combinationService.getSortValues(array);
        let combination = _.reduce(_.groupBy(values), (result, val) => {
            return condition(result, val);
        }, []);

        return {
            value: combination,
            kicker: _.difference(values, combination).slice(0, kickers)
        }
    },
    highCard: (array) => {
        let values = _.map(array, (el) => {
            return el.value;
        }).sort((a, b)=> {
            return b - a;
        });

        return {
            combinationId: 0,
            value: 0,
            kicker: values[0]
        };
    },
    onePair: (array) => {
        const condition = (result, val) => {
            if(val.length === 2){
                result.push(val[0]);
            }
            return result;
        };
        return combinationService.getCombination(array, condition, 3);
    },
    twoPairs: (array) => {
        const condition = (result, val) => {
            if(val.length === 2){
                result.push(val[0]);
            }
            return result;
        };
        return combinationService.getCombination(array, condition, 1);
    },
    threeOfKind: (array) => {
        const condition = (result, val) => {
            if(val.length === 3){
                result.push(val[0]);
            }
            return result;
        };

        return combinationService.getCombination(array, condition, 2);
    },
    fourOfKind: (array) => {
        const condition = (result, val) => {
            if(val.length === 4){
                result.push(val[0]);
            }
            return result;
        };

        return combinationService.getCombination(array, condition, 1);
    },
    straight: (array) => {
        const getIncSortedValues = fp.compose(
            fp.sortedUniq,
            fp.sortBy((o) => {
                return o;
            }),
            fp.map('value'),
        );
        let values = getIncSortedValues(array);

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