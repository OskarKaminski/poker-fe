import {GameService} from '../services/game/game.service';
import {combinationService} from '../services/combination/combination.service';

const gameService = new GameService();

let tableCtrl = function () {
    this.player1 = {
        name: 'Oskar'
    };
    this.player2 = {
        name: 'Computer'
    };
    this.player1.cards = gameService.pullOutPlayerCards(this.player1.name);
    this.player2.cards = gameService.pullOutPlayerCards(this.player2.name);
    this.flop = gameService.pullOutFlop();
    this.turn = gameService.pullOutTurn();
    this.river = gameService.pullOutRiver();
    this.player1.combination =
        combinationService.checkCombination([...this.player1.cards,
            ...this.flop,
            ...this.turn,
            ...this.river]);
    this.player2.combination =
        combinationService.checkCombination([...this.player2.cards,
            ...this.flop,
            ...this.turn,
            ...this.river]);
};

export let table = {
    selector: 'table',
    templateUrl: 'src/table/table.html',
    controller: tableCtrl
};