import {deckService} from './deck.service';
import allCardsMock from '../card/card.mock.json';

describe('Deck service', () => {

    it('Has getNewDeck method', ()=> {
        expect(deckService.getNewDeck).toBeDefined();
    });

    describe('GetNewDeck method', () => {

        it('Returns new deck with 52 cards', ()=> {
            let deck = deckService.getNewDeck();
            expect(deck.length).toBe(52);
            expect(deck[0]).toBeDefined();
            expect(deck[51]).toBeDefined();
        });

        it('Returns deck shuffled', ()=> {
            expect(deckService.getNewDeck()).not.toEqual(allCardsMock.allCards);
        });



    });

});