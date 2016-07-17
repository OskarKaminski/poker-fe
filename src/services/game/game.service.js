import {DeckService} from '../deck/deck.service';

export class GameService {

    constructor() {
        this.deckService = new DeckService();
        this.players = {};
        this.flop;
        this.turn;
        this.river;
    }

    pullOutPlayerCards(playerName) {
        return this.players[playerName] = [
            this.deckService.pullOutRandomCard(),
            this.deckService.pullOutRandomCard()
        ]
    }

    pullOutFlop() {
        return this.flop = [
            this.deckService.pullOutRandomCard(),
            this.deckService.pullOutRandomCard(),
            this.deckService.pullOutRandomCard()
        ]
    }

    pullOutTurn() {
        return this.turn = this.deckService.pullOutRandomCard();
    }

    pullOutRiver() {
        return this.river = this.deckService.pullOutRandomCard();
    }
}