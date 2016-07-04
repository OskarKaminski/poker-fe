import {GameService} from '../services/game/game.service';

const gameService = new GameService();

let tableCtrl = function(){
    this.player1 = {
        name: 'Oskar'
    };
    this.player2 = {
        name: 'Computer'
    };
    this.player1.cards = gameService.pullOutPlayerCards(this.player1.name);
    this.player2.cards = gameService.pullOutPlayerCards(this.player2.name);
    this.flop = gameService.pullOutFlop();
    // this.turn = gameService.pullOutTurn();
    // this.river = gameService.pullOutRiver();
};

export let table = {
    selector: 'table',
    templateUrl: 'src/table/table.html',
    controller: tableCtrl
};