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
    }
};