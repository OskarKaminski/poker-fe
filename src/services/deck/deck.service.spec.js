import {deckService} from './deck.service';

describe('Deck service', () => {

    it('Has getNewDeck method', ()=> {
        expect(deckService.getNewDeck).toBeDefined();
    });

    describe('GetNewDeck method', () => {

        it('Returns new deck with 52 cards', ()=> {
            let deck = deckService.getNewDeck();
            expect(deck.length).toBe(52);
        });

        

    });

});