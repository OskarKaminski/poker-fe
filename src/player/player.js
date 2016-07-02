let playerCtrl = function(){

};

let player = {
    selector: 'player',
    templateUrl: 'src/player/player.html',
    controller: playerCtrl,
    bindings: {
        cards: '<'
    }
};

angular.module('app').component('player', player);