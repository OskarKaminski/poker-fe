import * as angular from 'angular';
import {player} from './player/player';
import {card} from './card/card';
import {symbol} from './symbol/symbol';
import {board} from './board/board';
import {table} from './table/table';

let appCtrl = function () {
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
angular.module('app').component('board', board);
angular.module('app').component('table', table);