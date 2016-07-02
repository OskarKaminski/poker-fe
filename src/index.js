import * as angular from 'angular';
import {player} from './player/player';
import {card} from './card/card';

import {cardService} from './services/card/card.service';

const deck = cardService.getAllCards();

function getRandomCard() {
    const randomCardIndex = Math.floor(Math.random() * 52);
    return `${deck[randomCardIndex].value}${deck[randomCardIndex].color[0]}`;
}

let appCtrl = function () {
    this.player1 = [getRandomCard(), getRandomCard()];
    this.player2 = [getRandomCard(), getRandomCard()];
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