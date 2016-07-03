import {DeckService} from '../services/deck/deck.service';

const deckService = new DeckService();

let tableCtrl = function(){
    this.player1 = [
        deckService.pullOutRandomCard(),
        deckService.pullOutRandomCard()
    ];
    this.player2 = [
        deckService.pullOutRandomCard(),
        deckService.pullOutRandomCard()
    ];
    this.flop = [
        deckService.pullOutRandomCard(),
        deckService.pullOutRandomCard(),
        deckService.pullOutRandomCard()
    ];
    this.turn = deckService.pullOutRandomCard();
    this.river = deckService.pullOutRandomCard();
};

export let table = {
    selector: 'table',
    templateUrl: 'src/table/table.html',
    controller: tableCtrl
};