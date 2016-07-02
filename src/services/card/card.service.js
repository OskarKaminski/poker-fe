import * as _ from 'lodash'

const cardValues = [
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
];

const cardColors = [
    'heart', 'diamond', 'spade', 'club'
];

export const cardService = {
    getAllCards: function () {
        return _.flatMap(cardColors, (color)=> {
            return cardValues.map((value)=> {
                return {
                    value: value,
                    color: color
                }
            });
        });
    }
};