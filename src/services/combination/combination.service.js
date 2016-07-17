import _ from 'lodash';

const descLength = o => {
    return -o.length;
};
const sortDesc = o => {
    return -o
};

export const combinationService = {
    checkCombination: (array) => {
        
    },
    getCombination: (array, condition, kickers) => {
        const values = _(array)
            .map('value')
            .sortBy(sortDesc)
            .value();

        const combination = _(values)
            .groupBy()
            .sortBy(descLength)
            .filter({'length': condition})
            .value()[0];

        return {
            value: combination[0],
            kicker: _.difference(values, combination).slice(0, kickers)
        }
    },
    onePair: (array) => {
        return {
            ...combinationService.getCombination(array, 2, 3),
            id: 1
        }
    },
    twoPairs: (array) => {
        const highPair = combinationService.getCombination(array, 2, 1).value;
        const arrayWithoutHighPair = _.filter(array, o => {
            return o.value !== highPair
        });
        const l = combinationService.getCombination(arrayWithoutHighPair, 2, 1);
        return {
            highPair,
            lowPair: l.value,
            kicker: l.kicker,
            id: 2
        }
    },
    threeOfKind: (array) => {
        return {
            ...combinationService.getCombination(array, 3, 2),
            id: 3
        }
    },
    straight: (array) => {
        const result = _(array)
            .map('value')
            .sortBy()
            .reduce((prev, current) => {
                if (prev.val + 1 === current || !prev.counter) {
                    prev.counter++;
                    prev.max = current;
                }
                prev.val = current;
                return prev;
            }, {max: 0, val: 0, counter: 0});

        if (result.counter >= 5) {
            return {
                id: 4,
                value: result.max
            }
        }
    },
    color: (array) => {
        const longestColor = _(array)
            .map('symbol')
            .groupBy()
            .sortBy(descLength)
            .value()[0];

        if (longestColor.length >= 5) {
            const {value} = _.maxBy(array, 'value');
            return {
                id: 5,
                color: longestColor[0],
                value: value
            }
        }
    },
    fullHouse: (array) => {
        return {
            id: 6,
            threeOfKind: combinationService.threeOfKind(array).value,
            pair: combinationService.onePair(array).value
        }
    },
    fourOfKind: (array) => {
        return {
            ...combinationService.getCombination(array, 4, 1),
            id: 7
        }
    },
    poker: (array) => {
        return {
            id: 8,
            color: combinationService.color(array).color,
            value: combinationService.straight(array).value
        }
    }
};