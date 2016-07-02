import {cardService} from './card.service';
import mock from './card.mock.json';

describe('Card Service', () => {
    
    let card = cardService();
    
    it('has method getAllCards', ()=> {
        expect(card.getAllCards).toBeDefined();
    });
    
    describe('GetAllCards method', () => {
        
        const allCards = mock.allCards;
        
        it('returns all cards', ()=> {
            expect(card.getAllCards()).toEqual(allCards);
        });
        
    });
    
});