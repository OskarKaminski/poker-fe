import {GameService} from '../services/game/game.service';

const gameService = new GameService();

let tableCtrl = function(){
    this.player1 = gameService.pullOutPlayerCards('Oskar');
    this.player2 = gameService.pullOutPlayerCards('Computer');
    this.flop = gameService.pullOutFlop();
    this.turn = gameService.pullOutTurn();
    this.river = gameService.pullOutRiver();
};

export let table = {
    selector: 'table',
    templateUrl: 'src/table/table.html',
    controller: tableCtrl
};