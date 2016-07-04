import _ from 'lodash';

export const combinationService = {
    pair: (array) => {
        
        let values = _.map(array, (el) => {
            return el.value;
        });
        
        let grouped = _.groupBy(values);
        
        return _.reduce(grouped, (sum, val) => {
            return val.length === 2 ? sum + 1 : sum
        }, 0);
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
        });
        
        values = _.sortedUniq(values);
        let counter = 0;
        _.reduce(values, (previous, current) => {

            if (previous + 1 === current) {
                counter++;
            }

            return current;
        }, 0);
        return counter >= 4 ? 1: 0;
    }
};