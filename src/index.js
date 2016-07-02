import * as angular from 'angular';
import {player} from './player/player';
import {card} from './card/card';
import {symbol} from './symbol/symbol';

import {DeckService} from './services/deck/deck.service';
const deckService = new DeckService();

let appCtrl = function () {
    this.player1 = [
        deckService.pullOutRandomCard(),
        deckService.pullOutRandomCard()
    ];
    this.player2 = [
        deckService.pullOutRandomCard(),
        deckService.pullOutRandomCard()
    ];
};

let app = {
    selector: 'app',
    templateUrl: 'src/app.html',
    controller: appCtrl
};


angular.module('app', []);
angular.module('app').component('app', app);
angular.module('app').component('player', player);
angular.module('app').component('card', card);
angular.module('app').component('symbol', symbol);