import _ from 'lodash';

export const resultService = {
    bestValue: (values) => {
        const maxIterations = values[0].length;
        values = resultService.preFormatting(values);
        console.log(values);
        return resultService.recursiveCompareArrays(values, 0, maxIterations);
    },

    bestKicker: (kickers) => {
        const maxIterations = kickers[0].length;
        kickers = resultService.preFormatting(kickers);
        return resultService.recursiveCompareArrays(kickers, 0, maxIterations);
    },

    recursiveCompareArrays: (array, i, maxIterations) => {
        return _(array)
            .groupBy(`arr[${i}]`)
            .toPairs()
            .sortBy((o) => {
                return -o[0];
            })
            .map((subArr) => {
                return subArr[1];
            })
            .flatMap((subArr) => {
                if (subArr.length === 1) {
                    return resultService.getIndexes(subArr);
                }

                if (i === maxIterations) {
                    return [resultService.getIndexes(subArr)];
                }
                return resultService.recursiveCompareArrays(subArr, i + 1, maxIterations);
            })
            .value();
    },
    preFormatting: (array) => {
        return _.map(array, (subArray, i) => {
                subArray = _.sortBy(subArray, (o) => {
                    return -o;
                });
                return {
                    arr: subArray,
                    index: i
                }
            });
    },
    getIndexes: (array) => {
        return _.map(array, 'index');
    }
};