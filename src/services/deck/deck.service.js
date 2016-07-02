import * as _ from 'lodash';

import {cardService} from '../card/card.service';

export const deckService = {
    getNewDeck: () => {
        return deckService.shuffle(cardService.getAllCards());
    },
    shuffle: (deck) => {
        return _.shuffle(deck);
    }
};